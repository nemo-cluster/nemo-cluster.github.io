---
title: bwForCluster NEMO 2
toc: true
---

# bwForCluster NEMO 2

The **bwForCluster NEMO 2** is the high-performance compute cluster at the University of Freiburg, operated within the **bwHPC** initiative of Baden-Württemberg. It is intended for researchers from the fields **N**euroscience, **E**lementary Particle Physics, **M**icrosystems Engineering and **M**aterial Sciences.

NEMO 2 is a state service available to all researchers in Baden-Württemberg whose work falls within the supported scientific communities.

For detailed documentation refer to the [NEMO 2 Wiki](https://wiki.bwhpc.de/e/NEMO2){:target="_blank"}.

## Hardware

NEMO 2 provides around 240 compute nodes as well as special nodes for login, interactive jobs, visualization and AI. OS: Rocky Linux 9. Batch system: Slurm. Network: 100 GbE (RoCEv2).

**CPU nodes:**

| Type | Nodes | CPUs | Cores | RAM |
|------|------:|------|------:|----:|
| Genoa | 106 | 2× AMD EPYC 9654 | 192 | 768 GiB |
| Milan | 137 | 2× AMD EPYC 7763 | 128 | 512 GiB |

**GPU nodes:**

| Type | Nodes | CPUs | GPUs | RAM |
|------|------:|------|------|----:|
| NVIDIA L40S | 9 | 2× Intel Xeon 8562Y+, 64 cores | 4× L40S (48 GB each) | 512 GiB |
| AMD MI300A | 4 | 4× APU MI300A, 96 cores | 4× 128 GB HBM3 | — |
| NVIDIA H200 | 2 | 2× AMD EPYC 9654, 192 cores | 8× H200 (141 GB HBM3e each) | 1,536 GiB |
| NVIDIA RTX PRO 6000 | 1 | 2× AMD EPYC 9655, 192 cores | 4× RTX PRO 6000 | — |

**Storage:** 1 PB Weka parallel filesystem (>90 GB/s) for `$HOME` and workspaces, plus local NVMe SSDs (up to 3.8 TB) on every compute node.

## Registration

Group leaders or experienced researchers register once for their research group with a short project description. Group members can join the existing project.

The cluster is **not chosen by the user** — it is assigned based on research focus and hardware requirements. All bwForClusters require a brief project description at registration.

- [Register for bwForCluster](https://wiki.bwhpc.de/e/Registration/bwForCluster){:target="_blank"}
- [Registration details for Freiburg users](/nemo/access/)

## News and Newsletters

We publish news and important information on our [newsletters](/newsletters/) and [news](/news/) pages.
To subscribe to the mailing list, send an e-mail to [hpc-news-subscribe@hpc.uni-freiburg.de](mailto:hpc-news-subscribe@hpc.uni-freiburg.de).
