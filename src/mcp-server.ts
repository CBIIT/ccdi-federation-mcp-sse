import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { sampleMetadataHandler, fileMetadataHandler, apiInfoHandler } from './tools/index.ts';
import { z } from "zod";

const mcpServer = new McpServer({
  name: "CCDI Federation MCP Server",
  version: "1.0.0"
}, {
  capabilities: {},
});

// Register a tool specifically for testing resumability
  mcpServer.tool(
    'Get Sample Metadata',
    'Retrieves metadata for biological samples across the CCDI Federation. Each sample represents a biological specimen processed under specific experimental conditions. Use this endpoint to explore sample types, collection protocols, and sequencing strategies. Supports pagination and filtering.',
    {
      per_page: z.number().describe('Number of records per Page').default(10),
    },
    async ({ per_page }: { per_page: number }) => {
      const response = await sampleMetadataHandler({ per_page });
      return {
        content: [{ type: 'text', text: JSON.stringify(response) }],
      };
    }
  );

  mcpServer.tool(
    'Get File Metadata',
    'Provides metadata for individual data files in the federation, including file type, format, and download information. Enables discovery and validation of scientific datasets. Supports pagination and filter queries.',
    {
      per_page: z.number().describe('Number of records per Page').default(10),
    },
    async ({ per_page }: { per_page: number }) => {
      const response = await fileMetadataHandler({ per_page });
      return {
        content: [{ type: 'text', text: JSON.stringify(response) }],
      };
    }
  );

  mcpServer.tool(
    'Get API Metadata',
    'Returns metadata about the API itself, such as version information, supported endpoints, filterable fields, and pagination settings. Useful for dynamic configuration and client-side introspection.',
    {
      per_page: z.number().describe('Number of records per Page').default(10),
    },
    async ({ per_page }: { per_page: number }) => {
      const response = await apiInfoHandler({ per_page });
      return {
        content: [{ type: 'text', text: JSON.stringify(response) }],
      };
    }
  );


export { mcpServer };
