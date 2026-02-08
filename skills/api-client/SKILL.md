---
name: api-client
description: Interact with the Open Data Colombia API to fetch departments, cities, and natural areas.
---

# API Client Skill

This skill provides a strongly-typed interface for fetching data about Colombia's geography and tourism assets.

## Usage

```typescript
import { api } from '@/skills/api-client';

// Get all departments
const departments = await api.getDepartments();

// Get specific city
const city = await api.getCity(id);
```

## Tools
- `getDepartments()`: Fetch all departments.
- `getDepartment(id)`: Fetch a single department.
- `getCities()`: Fetch all cities.
- `getCity(id)`: Fetch a single city.
- `getNaturalAreas()`: Fetch all natural areas.
- `getNaturalArea(id)`: Fetch a single natural area.
