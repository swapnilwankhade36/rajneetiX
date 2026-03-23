// These types represent the contract for the "Citizen Node" referenced in mcp_architecture.md
// The actual nodes will interact via JSON-RPC, but the frontend needs matching types for the data structures.

export interface Grievance {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'Pending' | 'In Progress' | 'Resolved' | 'Rejected';
  timestamp: string;
  citizen_id: string;
  assigned_to_ministry?: string;
  assigned_to_mla?: string;
}

export interface PoliticianProfile {
  id: string;
  name: string;
  party: string;
  constituency: string;
  attendance_rate: number;
  funds_utilization: number;
  total_grievances_received: number;
  grievance_resolution_rate: number;
}

export interface ActivityLog {
  id: string;
  type: 'COMMENT' | 'RATING' | 'GRIEVANCE_FILED';
  description: string;
  timestamp: string;
  target_id: string; // The ID of the policy, politician, or grievance
}

// Stubs for future MCP API Calls (Could be tRPC procedures or direct fetch wrappers later)
export const McpApiStubs = {
  // Authentication Node
  loginCitizen: async (credentials: { idType: 'pan' | 'voterId', idValue: string, otp: string }) => {
    // Implement MCP Auth Node call here
    return { success: true, token: 'mock-jwt-token' };
  },

  // State Node (Grievance submission)
  submitGrievance: async (grievanceData: Partial<Grievance>) => {
    // Implement MCP State Node call here
    return { success: true, grievanceId: 'G-10293' };
  },

  // Intelligence Node (Fetching Politician profiles)
  getPoliticianProfile: async (politicianId: string): Promise<PoliticianProfile | null> => {
    // Implement MCP Intelligence Node call here
    return null; 
  }
};
