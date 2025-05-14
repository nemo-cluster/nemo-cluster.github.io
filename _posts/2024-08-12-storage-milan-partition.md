---
title: Storage and Milan Partition Delivered
author: NEMO Team
category: news
tags: [NEMO2]
date: 2024-08-12
highlight: false
motd: false
summary: >
    The Weka Storage and Milan partition have been successfully delivered for the new NEMO2 cluster.
    Testing, benchmarking, and system configuration will take place in the coming weeks.
    We anticipate starting with limited functionality and gradually expanding it over time.
    A portion of the old NEMO cluster had to be shut down to accommodate the installation of the Milan partition.
---

The Weka Storage and the Milan partition of the new NEMO2 cluster have been delivered in the last weeks.
In the next weeks, the companies will run tests and benchmarks and set up a final configuration for the systems.
After that, we plan to start a first phase of NEMO2 with limited functionality, which we will increase over time.

Unfortunately, we had to shut down a large portion of the old NEMO cluster since the Milan partition needed to be installed into the same rack space.
We will continue to operate the remaining approximately 300 nodes and the old BeeGFS until the official launch of NEMO2.

The first partition consists of:

* 137 Milan nodes, each node has
  * 2x 64 Core AMD EPYC 7763 2.45GHz processors (128 cores per node)
  * 512GiB DDR4 RAM
  * 100 Gbit/s Omni-Path Interconnect
  * 100 Gbis/s Ethernet
  * 1.92TB local NvMe Disk

* 1 Petabyte Weka Parallel Storage
  * Benchmark extrapolation: 80GB/s write, >200GB/s read (limited to 800Gbit/s Uplink)
  * Connected through 8x 100GbE Uplink
  * Each node connected via 100GbE

In the next month this partition will be extended by the Genoa and GPU/APU/KI partitions:

* 96x Genoa nodes
* 4x AMD APU nodes
* 8x Nvidia L40S nodes (4x L40S each node)
* further KI nodes will follow first half 2025
