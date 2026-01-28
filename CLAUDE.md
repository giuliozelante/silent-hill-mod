# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Silent Hill mod for Max Payne**. It contains game configuration files, assets, custom levels, weapons, characters, textures, particles, and sounds organized for the Max Payne modding framework.

## Repository Structure

**Main branch (master):**
- `data_newest/` - Current game database (runtime configuration)
- `SH Mod/` - Source content (models, textures, sounds, levels)

**Archive branches:**
- `docs` - MaxEd, MilkShape 3D, and particle effect tutorials
- `archive/data-old` - Previous version snapshot
- `archive/data-oldest` - Earliest version snapshot

Access archived content: `git checkout docs` or `git checkout archive/data-old`

## Key Configuration Files

All primary configuration is in `data_newest/`:

- `globalconfig.txt` - Central game configuration (character physics, camera, projectiles, etc.)
- `weaponpriority.txt` - Weapon selection priority and cycling order
- `menu/menu.txt` - Menu system configuration
- `console/console.txt` - Console settings

Header files with constants (`database/`):
- `weaponid.h` - Weapon ID definitions
- `characteranimid.h` - Animation state IDs
- `stringdefines.h` - String constants
- `level_items.h` - Level item IDs

## Configuration Syntax

Files use a C-like syntax:
```
[SectionName]
PropertyName = value;
// Comments use double slash

[NestedSections]
{
    [SubSection]
    Value = ( X, Y, Z );  // Vector format
    Color = AARRGGBB;      // Hex color format
}
```

Header files use `#define CONSTANT_NAME value` and `#include "path"`.

## Database Organization

`data_newest/database/` contains:
- `levels/` - Level files (.LVL, tracked via Git LFS)
- `weapons/` - Weapon definitions and models
- `particles/` - Particle effects (.rps files)
- `projectiles/` - Projectile behavior definitions
- `skins/` - Character skins and textures
- `skeletons/` - Character skeleton data
- `sounds/` - Sound effects
- `level_items/` - Weapon/item pickup definitions

## Git LFS

Large binary files are tracked via Git LFS:
- `.LVL` - Level files
- `.psd` - Photoshop source files

## External Tools Required

This mod requires external Max Payne modding tools (not included):
- **MaxEd** - Level and content editor
- **MilkShape 3D** - 3D modeling and animation
- Particle effect editor (RAD tools)

## Testing

Testing is manual through the Max Payne game engine. Test levels can be saved to `database/levels/test/` or `database/levels/testing/`.
