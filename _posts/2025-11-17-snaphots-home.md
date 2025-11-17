---
title: Home Directory Snapshots Now Available
author: NEMO Team
category: news
tags: [NEMO2, Weka, Snapshots]
date: 2025-11-17
highlight: true
motd: true
summary: >
  Automated snapshots of user home directories are now active. Recover accidentally deleted files with hourly, daily, and weekly snapshots.
---

## Home Directory Snapshots Now Available

We are pleased to announce that the snapshot feature for home directories has been activated. Snapshots are automatically created to help you recover files that were accidentally deleted.

### Snapshot Schedule

The following snapshot schedules are now in place:

- **Hourly**: Every hour between 09:00 and 18:00 CET, Monday to Friday (5 minutes offset), retention: 10 snapshots
- **Daily**: Every day at 22:05, retention: 7 snapshots
- **Weekly**: Every Saturday at 23:05, retention: 4 snapshots

### How to Access Your Snapshots

Your snapshots are available in the `/home/.snapshots/` directory. To access your personal snapshots:

1. Navigate to `/home/.snapshots/`
2. Find the snapshot directory (e.g., `@GMT-2025.11.17-14.05.01`)
3. Locate your user directory within the snapshot

**Example**: If your home directory is `/home/fr/fr_ab1234`, your snapshots are located at:

```bash
/home/.snapshots/@GMT-2025.11.17-14.05.01/fr/fr_ab1234
```

### Important Notes

- Snapshots are **not backups** - they are point-in-time copies stored on the same filesystem
- Use snapshots to recover files you accidentally deleted or modified
- Snapshots are read-only - you cannot modify files directly in the snapshot directories
- To restore a file, simply copy it from the snapshot directory back to your home directory
- Snapshots do not count against your storage quota

If you have any questions about accessing or restoring files from snapshots, please contact the NEMO support team.
