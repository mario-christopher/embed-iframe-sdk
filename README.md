# embed-iframe-sdk

A demonstration project showcasing different approaches to embedding web content using iframes.

## Overview

This project demonstrates how to create a parent application that embeds child applications using iframes. It consists of three interconnected packages in a Yarn workspace monorepo.

## Architecture

### Packages

1. **`parent-web`** (Port 5173) - Main parent application
   - Contains a form with user input fields
   - Demonstrates two different iframe embedding approaches
   - Serves as the primary interface

2. **`child-web`** (Port 5174) - Standalone web application
   - Contains wallet integration functionality
   - Features reusable components
   - Gets embedded in parent applications

3. **`child-sdk`** (Port 5175) - React SDK component
   - Wraps the child-web iframe
   - Provides an SDK layer for easier integration
   - Can be imported as a React component

## Features

### Iframe Embedding Approaches
1. **Direct Iframe Embedding**: Parent directly embeds child-web iframe
2. **SDK-Based Embedding**: Parent uses child-sdk component which wraps the iframe

### Wallet Integration
- Connect/Disconnect functionality
- Account display in input fields
- Permission management
- Auto-detection of existing connections

### Technical Stack
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Yarn Workspaces** for monorepo management
- **ESLint** for code quality

## Project Structure

```
embed-iframe-sdk/
├── packages/
│   ├── parent-web/          # Main parent application
│   ├── child-web/           # Child application
│   └── child-sdk/           # SDK wrapper component
├── package.json             # Workspace configuration
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd embed-iframe-sdk

# Install dependencies
yarn install
```

### Development

```bash
# Start all applications in development mode
yarn dev

# Or start individual packages
cd packages/parent-web && yarn dev
cd packages/child-web && yarn dev
cd packages/child-sdk && yarn dev
```

### Access Points
- **Parent Web**: http://localhost:5173
- **Child Web**: http://localhost:5174
- **Child SDK**: http://localhost:5175

## Usage

1. **Start the applications** using `yarn dev`
2. **Open the parent web** at http://localhost:5173
3. **Test the functionality** in the child-web iframe
4. **Compare embedding approaches** between direct iframe and SDK-based embedding

## License

This project is for educational and demonstration purposes.
