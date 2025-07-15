# Portfolio Data Structure

This directory contains all the mock data for the portfolio website in JSON format. The data is directly imported into components for simple, straightforward usage.

## File Structure

```
src/data/
├── types.ts              # TypeScript type definitions
├── index.ts              # Central exports
├── portfolio.json        # Personal information and social links
├── skills.json          # Skills and categories
├── projects.json        # Projects and categories
└── experience.json      # Work experience and certifications
```

## Data Files

### portfolio.json
Contains personal information, stats, and social links:
- Personal details (name, title, description, contact info)
- Stats (years of experience, projects completed, client satisfaction)
- Social media links

### skills.json
Contains skills data organized by categories:
- Individual skills with levels and descriptions
- Skill categories for organization
- Icons and proficiency levels

### projects.json
Contains project portfolio data:
- Project details with descriptions and technologies
- Project categories and filtering
- Demo URLs, GitHub links, and images
- Featured project flags

### experience.json
Contains work experience and professional data:
- Job positions with dates and descriptions
- Technologies used and achievements
- Company information and URLs
- Certifications and total experience

## Usage

The data is directly imported into components:

### Skills Component
```typescript
import { skillsData } from '../../data';

// Use the skills directly
const skills = skillsData.skills;
```

### Projects Component
```typescript
import { projectsData } from '../../data';

// Use the projects directly
const projects = projectsData.projects;
```

### Experience Component
```typescript
import { experienceData } from '../../data';

// Use the experiences directly
const experiences = experienceData.experiences;
```

### About & Contact Components
```typescript
import { portfolioData } from '../../data';

// Use personal data directly
const name = portfolioData.personal.name;
const email = portfolioData.personal.email;
```

## Type Safety

All data has TypeScript types defined in `types.ts`:
- `PortfolioData` - Personal information and stats
- `SkillsData` - Skills and categories
- `ProjectsData` - Projects and categories  
- `ExperienceData` - Work experience and certifications
- Individual types: `Skill`, `Project`, `Experience`

## Updating Data

To update content:

1. **Edit JSON files directly** - Change values in the JSON files
2. **No compilation needed** - Changes are reflected immediately
3. **Type checking** - TypeScript ensures data structure integrity

## Adding New Data

To add new fields:

1. **Update JSON files** with new fields
2. **Update type definitions** in `types.ts`
3. **Update components** to use the new data
4. **TypeScript will validate** the structure

## Benefits

- ✅ **Simple and direct** - No complex API layer
- ✅ **Fast development** - Immediate data access
- ✅ **Type safe** - Full TypeScript support
- ✅ **Easy to edit** - Direct JSON manipulation
- ✅ **No loading states** - Data available immediately
- ✅ **Perfect for static sites** - No backend required
