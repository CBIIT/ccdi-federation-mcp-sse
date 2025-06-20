# CCDI Federation MCP SSE Server

This project implements a Model Context Protocol (MCP) server for the Childhood Cancer Data Initiative (CCDI) Federation, enabling real-time communication using Server-Sent Events (SSE). It provides standardized endpoints for accessing and managing biological sample and file metadata across the CCDI Federation, supporting integration with MCP-compatible clients and tools.

## Overview

The CCDI Federation MCP SSE Server exposes endpoints for:

- Retrieving biological sample metadata (with filtering and pagination)
- Retrieving file metadata (with filtering and pagination)
- Real-time communication via SSE for persistent client connections

It is built on top of the [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) and uses Express for HTTP and SSE endpoints.

## Features

- Implements the Model Context Protocol (MCP) for standardized model/resource management
- Real-time updates and communication using Server-Sent Events (SSE)
- Endpoints for querying sample and file metadata from the CCDI Federation
- Extensible tool registration for additional MCP-compatible operations

## Prerequisites

- Node.js (v14 or higher recommended)
- Yarn or npm package manager

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd ccdi-federation-mcp-sse
yarn install # or npm install
```

## Usage

### Starting the Server

To start the server in development mode:

```bash
yarn dev
```

To start the server in production mode:

```bash
yarn start
```

By default, the server runs on port 3001. You can override this by setting the `PORT` environment variable:

```bash
PORT=5000 yarn start
```

### Endpoints

- `/sse` - SSE endpoint for establishing persistent client connections
- `/messages` - Endpoint for sending messages to the MCP server

## Project Structure

- `src/index.ts` - Main entry point of the application
- `src/mcp-server.ts` - MCP server and tool/resource definitions
- `src/sse-server.ts` - SSE server implementation using Express
- `src/tools/` - Handlers for metadata retrieval and other tools
- `src/schemas/` - Zod schemas for request validation

## Dependencies

- [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- [Express](https://expressjs.com/)
- [zod](https://zod.dev/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
