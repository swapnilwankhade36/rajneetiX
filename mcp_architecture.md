# RajneetiX — MCP System Architecture

> Stitch MCP Project ID: `10526661909495271449`
> Architecture Screen ID: `c2c838c193d441eca5302b215c528e3e`

---

## 1. Architecture Philosophy

RajneetiX is structured as a **Model Context Protocol (MCP) node graph**. Each service domain is an independent, self-contained node. All inter-node communication flows through the central **tRPC API Gateway** — no node imports another directly.

This ensures:
- **Isolation**: A failure in one node never cascades to others
- **Scalability**: New nodes can be added by registering a contract + sub-router
- **Replaceability**: Any node can be swapped out without changing others
- **Clean Contracts**: All data exchange follows typed, versioned interfaces

---

## 2. System Layer Map

```
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                               │
│              Next.js App Router (Vercel)                        │
│         Tailwind CSS · ShadCN UI · Framer Motion · Zustand      │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTPS / SSE
┌───────────────────────────▼─────────────────────────────────────┐
│                   tRPC API GATEWAY                              │
│              Central MCP Hub (NestJS + tRPC)                    │
│         All MCP node routers are composed here                  │
└──┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬────────────┘
   │      │      │      │      │      │      │      │
   ▼      ▼      ▼      ▼      ▼      ▼      ▼      ▼
[auth] [pol] [prom] [comp] [feed] [reg] [srch] [rt]
   │      │      │      │      │      │      │      │
└──┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴────────────┐
│                      DATA LAYER                                 │
│   PostgreSQL (Supabase + Prisma)  ·  Supabase Storage           │
│   Supabase Realtime  ·  Typesense Index                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. MCP Node Registry

### Node 1: `auth-node`
**Role**: Identity verification and session management

| Property | Value |
|---|---|
| Provider | Supabase Auth (OTP) |
| Verification | PAN Card / Voter ID |
| Age Gate | 18+ only |
| JWT Strategy | RS256, refresh-token rotation |
| Publishes | `user.verified`, `user.session` |

**Contract**:
```typescript
interface AuthNodeContract {
  signIn(phone: string): Promise<OTPChallenge>;
  verifyOTP(phone: string, otp: string): Promise<Session>;
  verifyIdentity(userId: string, doc: IDDocument): Promise<VerificationStatus>;
  refreshSession(token: string): Promise<Session>;
  signOut(userId: string): Promise<void>;
}
```

---

### Node 2: `politician-node`
**Role**: Leader profiles, performance metrics, attendance, budget data

| Property | Value |
|---|---|
| Chamber Types | Lok Sabha · Rajya Sabha · Vidhan Sabha |
| Data Sources | Admin-seeded + verified imports |
| Subscribes to | `region-node` (for constituency mapping) |
| Publishes | `politician.profile`, `politician.metrics` |

**Contract**:
```typescript
interface PoliticianNodeContract {
  getById(id: string): Promise<PoliticianProfile>;
  listByChamber(chamber: Chamber, filter: RegionFilter): Promise<Politician[]>;
  getPerformance(id: string): Promise<PerformanceMetrics>;
  search(query: string): Promise<Politician[]>;
}
```

---

### Node 3: `promise-node` *(Critical)*
**Role**: Full lifecycle tracking of political promises

| Property | Value |
|---|---|
| Status Values | `Completed` · `In Progress` · `Not Started` |
| Supports | Proof attachments via Supabase Storage |
| Publishes | `promise.created`, `promise.statusChanged` |
| Subscribes to | `politician-node.profile` |

**Contract**:
```typescript
interface PromiseNodeContract {
  create(input: PromiseInput): Promise<Promise>;
  getByPolitician(politicianId: string): Promise<Promise[]>;
  updateStatus(id: string, status: PromiseStatus, proof?: string): Promise<Promise>;
  attachProof(id: string, file: File): Promise<string>; // returns storage URL
}
```

---

### Node 4: `complaint-node`
**Role**: Civic issue submission, routing, tracking, and prioritization

| Property | Value |
|---|---|
| Categories | Road · Water · Electricity · Sanitation · Other |
| Status Values | `Pending` · `In Progress` · `Resolved` |
| Routing | Auto-maps to responsible leader via `region-node` |
| Publishes | `complaint.submitted`, `complaint.statusChanged` |
| Subscribes to | `region-node.mapping`, `realtime-node` |

**Contract**:
```typescript
interface ComplaintNodeContract {
  submit(input: ComplaintInput): Promise<Complaint>;
  list(filter: RegionFilter): Promise<Complaint[]>;
  upvote(id: string, userId: string): Promise<void>;
  updateStatus(id: string, status: ComplaintStatus): Promise<Complaint>;
  streamByRegion(regionId: string): Observable<Complaint>;
}
```

---

### Node 5: `feedback-node`
**Role**: Aggregated public satisfaction data and trend analytics

| Property | Value |
|---|---|
| Inputs | 1–5 star ratings per leader, per region |
| Outputs | Aggregated scores, trend graphs |
| Publishes | `feedback.rated`, `feedback.trends` |
| Subscribes to | `politician-node.profile`, `realtime-node` |

**Contract**:
```typescript
interface FeedbackNodeContract {
  rate(politicianId: string, userId: string, rating: number): Promise<void>;
  getLeaderRating(politicianId: string): Promise<AggregatedRating>;
  getRegionalSatisfaction(regionId: string): Promise<SatisfactionReport>;
  getTrends(politicianId: string, period: DateRange): Promise<TrendData[]>;
}
```

---

### Node 6: `region-node`
**Role**: Hierarchical geographic navigation and leader-region mapping

| Property | Value |
|---|---|
| Hierarchy | State → District → Area (Constituency) |
| Mapping | Each area maps to exactly one representative |
| Publishes | `region.resolved`, `region.mapping` |
| Consumed by | `complaint-node`, `politician-node`, `feedback-node` |

**Contract**:
```typescript
interface RegionNodeContract {
  getStates(): Promise<State[]>;
  getDistricts(stateId: string): Promise<District[]>;
  getAreas(districtId: string): Promise<Area[]>;
  getLeaderForArea(areaId: string): Promise<PoliticianRef>;
  resolveUserRegion(userId: string): Promise<Region>;
}
```

---

### Node 7: `search-node`
**Role**: Full-text and faceted search powered by Typesense

| Property | Value |
|---|---|
| Engine | Typesense |
| Indexes | Politicians · Promises · Complaints |
| Features | Typo-tolerance · Faceting · Geo-search |
| Sync | Subscribes to create/update events from other nodes |

**Contract**:
```typescript
interface SearchNodeContract {
  search(query: string, filters?: SearchFilters): Promise<SearchResults>;
  indexPolitician(data: PoliticianProfile): Promise<void>;
  indexPromise(data: Promise): Promise<void>;
  indexComplaint(data: Complaint): Promise<void>;
}
```

---

### Node 8: `realtime-node`
**Role**: Live data streaming using Supabase Realtime channels

| Property | Value |
|---|---|
| Provider | Supabase Realtime (WebSocket) |
| Channels | `complaints:{regionId}` · `ratings:{politicianId}` |
| Consumed by | `complaint-node`, `feedback-node` |
| Pattern | Pub/Sub event bus across the node graph |

**Contract**:
```typescript
interface RealtimeNodeContract {
  subscribeToComplaints(regionId: string): Observable<Complaint>;
  subscribeToRatings(politicianId: string): Observable<RatingEvent>;
  publish(channel: string, event: RealtimeEvent): Promise<void>;
}
```

---

## 4. Cross-Node Pipelines

| From Node | To Node | Event / Trigger |
|---|---|---|
| `complaint-node` | `region-node` | Map complaint to responsible leader |
| `promise-node` | `politician-node` | Attach promise to leader profile |
| `feedback-node` | `politician-node` | Attach ratings to profile |
| `complaint-node` | `realtime-node` | Stream live complaint updates |
| `feedback-node` | `realtime-node` | Stream live ratings |
| `politician-node` | `search-node` | Index on create/update |
| `promise-node` | `search-node` | Index on create/update |
| `complaint-node` | `search-node` | Index on create/update |

---

## 5. Directory Structure

```
src/
  mcp/
    auth/             auth-node contract + handlers
    politician/       politician-node contract + handlers
    promise/          promise-node contract + handlers
    complaint/        complaint-node contract + handlers
    feedback/         feedback-node contract + handlers
    region/           region-node contract + handlers
    search/           search-node contract + handlers
    realtime/         realtime-node contract + handlers
    gateway/
      trpc.router.ts  Composes all node routers → single tRPC API
    shared/
      types.ts        Shared primitive types (Region, Status, etc.)
      guards.ts       Auth guards (verified citizen only)
      pipes.ts        Input validation pipes
```

---

## 6. Scalability Rules

1. **To add a new node**: Create `src/mcp/<node-name>/` with a contract file and sub-router. Register it in `gateway/trpc.router.ts`. No other changes needed.
2. **No direct node imports**: Nodes never import each other. All cross-node calls go through the gateway or the `realtime-node` event bus.
3. **Versioned contracts**: Each contract interface is versioned (e.g., `AuthNodeContractV1`). Breaking changes increment the version.
4. **Independent deployment**: Each node can be extracted to its own microservice without changing the gateway interface.

---

## 7. Design System (Stitch MCP)

The Stitch MCP project **"RajneetiX MCP Architecture"** provides the official design system:

- **Design System Name**: Civic Blueprint
- **Primary**: `#004A99` (Institutional Blue)
- **Secondary**: `#28A745` (Verified Green — used for active pipelines and success states)
- **Background**: `#F4F7F6`
- **Font**: Inter
- **Style**: Minimal enterprise, tonal elevation, no 1px borders

> View on Stitch: `projects/10526661909495271449`
