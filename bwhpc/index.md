---
title: The bwHPC Project
toc: true
---

# bwHPC

**bwHPC** (Baden-Württemberg High Performance Computing) is a state-wide initiative that provides integrated computing and data storage infrastructure for research and teaching. It is funded by the Ministry of Science, Research and Arts (MWK) Baden-Württemberg, the German Research Foundation (DFG), and the ten state universities.

## bwHPC-S5

**bwHPC-S5** (Scientific Simulation and Storage Support Services) is the coordinating project for user support across all bwHPC clusters. It connects all ten state universities in a federated support network and covers three areas:

- **HPC:** Technical operation, user support and further development of bwUniCluster 3.0, NEMO 2, Helix, BinAC 2 and JUSTUS 2
- **Data Intensive Computing (DIC):** Support for processing large datasets in research, development and teaching
- **Large Scale Scientific Data Management (LS2DM):** Coordination of data acquisition, analysis, storage, archiving and publication

[bwHPC Website](https://www.bwhpc.de/){:target="_blank"} · [bwHPC Wiki](https://wiki.bwhpc.de/){:target="_blank"} · [bwHPC eLearning](https://training.bwhpc.de/){:target="_blank"}

## Available bwHPC Clusters

| Cluster | Location | Scientific Communities |
|---------|----------|----------------------|
| [bwUniCluster 3.0](https://wiki.bwhpc.de/e/BwUniCluster3.0){:target="_blank"} | KIT (Karlsruhe) | All fields, teaching |
| [bwForCluster NEMO 2](/nemo/) | Freiburg | Neuroscience, Particle Physics, Materials Science, Microsystems Engineering |
| [bwForCluster Helix](https://wiki.bwhpc.de/e/Helix){:target="_blank"} | Heidelberg | Structural & Systems Biology, Medical Sciences, Soft Matter, Digital Humanities, Mathematics & CS |
| [bwForCluster BinAC 2](https://wiki.bwhpc.de/e/BinAC2){:target="_blank"} | Tübingen | Bioinformatics, Astrophysics, Geosciences, Pharmacy, Medical Informatics |
| [bwForCluster JUSTUS 2](https://wiki.bwhpc.de/e/JUSTUS2){:target="_blank"} | Ulm | Theoretical Chemistry, Condensed Matter Physics, Quantum Sciences |

## Other bwForClusters

Researchers at the University of Freiburg can apply for access to other bwForClusters in addition to NEMO 2. The appropriate cluster is **not chosen by the user** — it is assigned based on research focus and hardware requirements. All bwForClusters require a short project description at registration.

[Registration for bwForCluster](https://wiki.bwhpc.de/e/Registration/bwForCluster){:target="_blank"}

### bwForCluster Helix (Heidelberg)

For research in **Structural & Systems Biology, Medical Sciences, Soft Matter, Digital Humanities and Mathematics & CS**.

355 standard + 15 fat nodes (2× AMD EPYC 7513, 64 cores; fat nodes with 2 TB RAM). GPU: 29 nodes × 4× NVIDIA A40, 26 nodes × 4× A100 (40 GB), 4 nodes × 8× A100 (80 GB, 2 TB RAM), 3 nodes × 8× H200 (141 GB, 2.3 TB RAM). Network: non-blocking InfiniBand HDR (200 Gbit/s). Storage: ~11 PB IBM Spectrum Scale (~800 TB Flash).

### bwForCluster BinAC 2 (Tübingen)

For research in **Bioinformatics, Astrophysics, Geosciences, Pharmacy and Medical Informatics**. OS: Rocky Linux 9.

180 standard nodes (2× AMD EPYC Milan, 64 cores, 512 GB RAM) + 16 SMP nodes (2 TB RAM). GPU: 32 nodes × 2× NVIDIA A30 (24 GB), 8 nodes × 4× A100 (80 GB), 4 nodes × 4× H200 NVL (141 GB HBM3e, 1.5 TB RAM). Network: HDR InfiniBand / 100 GbE. Storage: 8.1 PB Lustre.

### bwForCluster JUSTUS 2 (Ulm)

For research in **Theoretical Chemistry, Condensed Matter Physics and Quantum Sciences**. OS: Rocky Linux 8.

692 compute nodes, 33,696 cores. All nodes: 2× Intel Xeon Gold 6252 (Cascade Lake, 24 cores each), Omni-Path 100 Gbit/s.

| Type | Nodes | Cores | RAM |
|------|------:|------:|----:|
| Standard | 456 | 48 | 192 GB |
| Medium | 44 | 48 | 384 GB |
| SSD | 148 | 48 | 384 GB + 2× 1.6 TB NVMe |
| Medium SSD | 20 | 48 | 768 GB + 2× 1.6 TB NVMe |
| Large SSD | 8 | 48 | 1,536 GB + 5× 1.6 TB NVMe |
| GPU | 14 | 48 | 192 GB + 2× NVIDIA V100S |

Storage: 250 TB `$HOME` (with backup) + 1,200 TB workspaces (Lustre).
