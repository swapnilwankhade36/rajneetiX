1. PROJECT OVERVIEW

Project Name: RajneetiX

RajneetiX is a political transparency and accountability platform designed to connect citizens with governance through verified data, structured interaction, and public feedback systems.

The platform focuses on presenting factual, verifiable, and structured information about political leaders, their work, and their commitments.

2. CORE OBJECTIVES

The system must enable users to:

Access verified data about political leaders
Track promises made by leaders and their completion status
Report civic issues in their locality
View public satisfaction and feedback
Navigate political data based on region and governance level

The platform must strongly emphasize accountability by comparing promises versus actual work done.

3. REFERENCE UI INSTRUCTION

I will provide detailed UI reference designs separately.

Follow the provided UI references strictly for layout, components, and visual structure
Do not generate or assume additional UI patterns beyond the references
Focus on implementing the system logic, structure, and data representation accurately
4. TARGET SYSTEM APPROACH

The platform must function as a data-driven governance system, not a social platform.

Key characteristics:

Structured and hierarchical data
Clear mapping between citizens, issues, and leaders
Strong emphasis on transparency
Consistent and reliable information flow
5. USER AUTHENTICATION
Only users above 18 years are allowed
Verification via PAN Card or Voter ID
No politician or candidate login
All actions are performed by verified citizens only
6. SYSTEM STRUCTURE

After authentication, users access a central system with the following modules:

Lok Sabha
Rajya Sabha
Vidhan Sabha
Complaint / Problem Reporting
Public Opinion
7. CORE MODULES
7.1 Political Performance Module

Provide structured data for each political leader:

Projects completed
Budget utilization
Attendance and participation
7.2 Promise Tracking Module (Critical)

Track promises made by political leaders.

Each promise must include:

Description
Date of announcement
Deadline (if available)
Status:
Completed
In Progress
Not Started
Supporting proof or updates

This module must clearly connect promises to actual outcomes.

7.3 Complaint Management Module

Users must be able to:

Submit complaints with description and optional images
Select category (e.g., road, water, electricity)
Tag location

System must:

Map each complaint to the responsible political leader
Maintain public visibility of complaints
Allow prioritization through user interaction (e.g., upvotes)
Track status:
Pending
In Progress
Resolved
7.4 Public Feedback Module

Provide aggregated public opinion data:

Ratings for political leaders
Area-based satisfaction levels
Trend indicators over time
7.5 Regional Mapping Module

Enable hierarchical navigation:

State → District → Area

Each region must display:

Assigned political leader
Local complaints
Performance indicators
8. PAGE STRUCTURE (FUNCTIONAL)
Home / Dashboard
Central access point to all modules
Navigation between governance levels and features
Political Listing Pages
Display leaders by category
Support filtering by region and party
Politician Detail Page

Must act as a complete accountability profile, including:

Performance data
Promise tracking
Activity timeline
Public feedback
Constituency issues
Complaint Page
Complaint submission interface
Public complaint listing
Sorting and prioritization
Public Opinion Page
Rankings and satisfaction metrics
Comparative analysis of leaders
Regional Navigation Page
Hierarchical selection (state, district, area)
Localized data display
9. DATA INTEGRITY AND TRUST

The system must ensure:

Verified and reliable data sources
Transparent information display
No anonymous manipulation
Clear linkage between actions, issues, and responsible leaders
10. SYSTEM BEHAVIOR
All complaints and feedback are publicly visible
Data must be structured and easy to interpret
System must maintain consistency across all modules
Avoid unnecessary complexity in interaction flow
11. OUTPUT REQUIREMENTS

Generate a complete system implementation that:

Accurately represents all modules
Maintains logical consistency
Properly connects all features (promises, complaints, feedback, performance)
Aligns with the provided UI references
12. FINAL DIRECTIVE

Build RajneetiX as a structured, data-centric political transparency platform focused on accountability, where citizens can clearly evaluate leaders based on their promises, actual work, and public feedback.


Use this world-class tech stack:

Frontend:

* Next.js (App Router)
* Tailwind CSS (high-level palette: #FFFFFF, #F4F7F6, #004A99, #28A745)
* ShadCN UI
* Framer Motion
* Zustand

Backend:

* Node.js + NestJS
* tRPC

Database:

* PostgreSQL (Supabase) + Prisma

Core Services:

* Supabase Auth (OTP)
* Supabase Realtime
* Supabase Storage

Search:

* Typesense

Deployment:

* Vercel

Ensure minimal, structured, highly trustworthy design with a high-level color system. Do not deviate.

13. MCP INTEGRATION (Stitch MCP)

All modules in RajneetiX are connected through the Model Context Protocol (MCP) for structured, modular communication.

Stitch MCP Project: "RajneetiX MCP Architecture" (ID: 10526661909495271449)
Design System: "Civic Blueprint"

MCP NODE REGISTRY:

Each of the following is an independent, self-contained MCP node:

  auth-node           Supabase OTP, PAN/Voter ID verification, 18+ gate
  politician-node     Leader profiles, performance, attendance, budget
  promise-node        Promise CRUD, status lifecycle, proof uploads (CRITICAL)
  complaint-node      Civic issue submission, geo-tagging, status pipeline, upvotes
  feedback-node       Ratings aggregation, satisfaction trends, analytics
  region-node         State → District → Area hierarchy, leader-region mapping
  search-node         Typesense-powered full-text and faceted search
  realtime-node       Supabase Realtime channels, live sync event bus

CENTRAL HUB:
  tRPC API Gateway — all frontend requests and cross-node communication
  route through this single entry point.

CROSS-NODE PIPELINES:
  complaint-node  → region-node     (map complaint to responsible leader)
  promise-node    → politician-node (attach promise to leader profile)
  feedback-node   → politician-node (attach ratings to profile)
  complaint-node  → realtime-node   (stream live complaint updates)
  feedback-node   → realtime-node   (stream live ratings)
  All nodes       → search-node     (index on create/update)

SCALABILITY RULES:
  - Each node is independently deployable
  - No node imports another node directly
  - Adding a new node requires only: contract file + gateway registration
  - All cross-node communication goes through gateway or realtime event bus

Full specification: mcp_architecture.md
