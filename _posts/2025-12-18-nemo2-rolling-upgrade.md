---
title: "NEMO2 Rolling Upgrade: Enhanced Security and Performance"
author: NEMO Team
category: news
tags: [NEMO2, Maintenance, Upgrade, Slurm]
date: 2025-12-18
highlight: true
motd: true
summary: >
  NEMO2 has undergone a rolling upgrade with security updates, firmware/BIOS upgrades, and Slurm 25.05.5. Jobs continued running throughout the process as we work toward 100% uptime.
---

## NEMO2 Rolling Upgrade Completed

We have successfully performed a rolling upgrade of bwForCluster NEMO 2 to enhance system security, stability, and performance. This upgrade was designed to minimize disruption to your work while implementing critical updates.

### What Was Updated

The following updates were applied across the cluster:

- **Security Updates**: Latest security patches installed on all nodes
- **Firmware & BIOS Upgrades**: Updated firmware and BIOS on servers and login nodes
- **Slurm Upgrade**: Upgraded from version 24.05.6 to 25.05.5

### Minimizing Downtime

Our goal is to achieve **100% uptime** for NEMO2. The rolling upgrade approach allowed us to:

- Keep jobs running - Your running jobs continued executing in the background
- Minimize interruptions - Only brief service interruptions occurred
- Update systematically - Nodes were upgraded one at a time to maintain cluster availability

### Expected Impact

During the rolling upgrade:

- Running jobs: Continued without interruption
- Job submission: May have been briefly unavailable during certain service updates (e.g., Slurm controller upgrade and firmware upgrade)
- Login access: Remained available throughout the process

### We Value Your Feedback

If you experienced any issues during the upgrade or have feedback about the process, please let us know! Submit a ticket at:

**https://bw-support.scc.kit.edu**

Your input helps us continue improving our maintenance procedures and minimize future disruptions.

### Questions?

For any questions about the upgrade or if you notice unexpected behavior, please don't hesitate to contact our support team through the ticket system.
