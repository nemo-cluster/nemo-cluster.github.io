---
title: "FIDO2 SSH Keys Now Available on NEMO2"
author: NEMO Team
category: news
tags: [NEMO2, Yubikey, FIDO2, SSH Keys]
date: 2025-12-01
highlight: true
motd: true
summary: >
  FIDO2 SSH keys are now available on NEMO 2! Login with your Yubikey hardware token - no 2-factor unlock required. Keys work immediately after registration and provide enhanced security through hardware-protected authentication. Get started with our Quick Start Guide.
---

## Enhanced SSH Security with Hardware Keys

We're excited to announce that **FIDO2 SSH keys** are now supported on bwForCluster NEMO 2! This new authentication method offers a significantly improved login experience with enhanced security.

### What are FIDO2 SSH Keys?

FIDO2 SSH keys (using hardware tokens like Yubikeys) provide hardware-based authentication for SSH connections. Unlike traditional SSH keys, they offer several key advantages:

- **No 2-factor unlock required** - Keys work immediately after registration
- **Hardware-protected** - Private key material never leaves your security token
- **Physical presence required** - Must touch your hardware key to authenticate
- **Phishing-resistant** - Cryptographic authentication tied to your physical device

### Key Benefits

The most significant improvement: **FIDO2 SSH keys work immediately without requiring 2-factor authentication unlock**. While regular SSH keys on our clusters need to be "unlocked" with your username, password, and OTP after each validity period (8-12 hours), FIDO2 keys are always ready to use - you simply touch your hardware key when prompted.

### Getting Started

Setting up FIDO2 SSH keys is straightforward:

1. **Get a compatible hardware key** - Yubikey 5 series or newer (OpenSSH 8.2+ required)
2. **Create your SSH key** - Use `ssh-keygen -t ed25519-sk` 
3. **Register in bwIDM** - Add your public key as an Interactive Key
4. **Connect** - Touch your key when prompted, no password needed!

### Documentation

We've prepared comprehensive guides to help you get started:

- **[SSH with Yubikey - Quick Start Guide](https://wiki.bwhpc.de/e/Registration/SSH/Yubikey-Quick-Start)** - Step-by-step setup instructions
- **[SSH Key Registration Guide](https://wiki.bwhpc.de/e/Registration/SSH)** - Complete documentation for all SSH key types
- **[Advanced Yubikey Guide](https://gitlab.rz.uni-freiburg.de/escience-public/yubikey)** - Detailed configuration and troubleshooting

### Availability

FIDO2 SSH keys are currently supported on:
- ✅ **bwForCluster NEMO 2**
- ✅ **bwUniCluster 3.0**

### Questions?

If you have questions about FIDO2 SSH keys or need assistance with setup, please contact our support team or visit our documentation pages linked above.
