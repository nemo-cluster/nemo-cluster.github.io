---
title: "SSH Configuration Issue Fixed: Local Authorized Keys No Longer Working"
author: NEMO Team
category: news
tags: [NEMO, Security, SSH, Authentication]
date: 2026-01-21
highlight: false
motd: false
summary: >
    An SSH configuration issue on the login nodes has been fixed. SSH keys stored in local authorized_keys files are no longer accepted. This behavior was never intended - please use SSH keys configured in login.bwidm.de instead.
---

## SSH Configuration Issue Fixed

We have fixed an SSH configuration issue on the login nodes that unintentionally allowed the use of local SSH keys stored in `$HOME/.ssh/authorized_keys` files.

### What happened?

Due to a misconfiguration of the SSH service on the login nodes, SSH keys stored in your local `$HOME/.ssh/authorized_keys` file were incorrectly accepted in addition to SSH keys configured through our central authentication system at login.bwidm.de. This behavior was never intended and has now been corrected.

### Correct authentication methods

As intended, you can access the cluster using:

1. Password + OTP (One-Time Password)
2. SSH keys configured in login.bwidm.de

### Setting up SSH keys properly

If you need to set up SSH keys for authentication, please follow the official guide:

**[SSH Key Configuration Guide](https://wiki.bwhpc.de/e/Registration/SSH)**

This guide will walk you through the process of properly configuring your SSH keys in the central authentication system.

### Questions or Issues?

If you have questions about SSH authentication or experience any login issues, please submit a [ticket](https://bw-support.scc.kit.edu).
