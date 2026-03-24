---
title: bwUniCluster 3.0
toc: true
---

# bwUniCluster 3.0

The **bwUniCluster 3.0** is the shared general-purpose HPC system of the universities and universities of applied sciences in Baden-Württemberg. It is located at the Scientific Computing Center (SCC) of the Karlsruhe Institute of Technology (KIT).

The bwUniCluster complements the field-specific bwForClusters and serves as the **entry-level system** for HPC in research and teaching. All researchers and students at Baden-Württemberg universities can use it free of charge — **no project proposal required**.

In operation since April 2025. Over 370 nodes connected via fast InfiniBand. OS: Red Hat Enterprise Linux 9.

## Hardware

**CPU nodes:**

| Type | Nodes | CPUs | Cores | RAM |
|------|------:|------|------:|----:|
| Standard | 70 | 2× AMD EPYC 9454 | 96 | 384 GiB |
| Ice Lake | 272 | 2× Intel Xeon Platinum 8358 | 64 | 256 GiB |
| High Memory | 4 | 2× AMD EPYC 9454 | 96 | 2,304 GiB |

**GPU nodes:**

| Type | Nodes | Cores | GPUs | RAM |
|------|------:|------:|------|----:|
| NVIDIA H100 | 12 | 96 | 4× H100 (94 GiB each) | 768 GiB |
| AMD MI300A | 1 | 4× APU MI300A (96 cores each) | 4× 128 GiB HBM3 | — |
| NVIDIA A100/H100 Ice Lake | 15 | 64 | 4× A100 or H100 | 512 GiB |
| NVIDIA A100 Cascade Lake | 19 | 48 | 4× A100 (40 GiB each) | 384 GiB |

**Storage:** Two parallel Lustre filesystems for `$HOME` and workspaces, plus local NVMe SSDs on every node.

## Registration

Self-registration with a valid university account is sufficient — no project description required. You must complete a questionnaire within 14 days of registration, otherwise access will be temporarily suspended.

- [Register for bwUniCluster 3.0](https://wiki.bwhpc.de/e/Registration/bwUniCluster){:target="_blank"}
- [bwUniCluster 3.0 Wiki](https://wiki.bwhpc.de/e/BwUniCluster3.0){:target="_blank"}
