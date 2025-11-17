---
title: New GPU Nodes with NVIDIA H200 Available
author: NEMO Team
category: news
tags: [NEMO2, Hardware, Nvidia H200]
date: 2025-08-28
highlight: false
motd: false
summary: >
  Two new GPU nodes with 8× NVIDIA H200, 192 cores, 1.5 TB RAM, and 3.8 TB NVMe are now available in NEMO2 for testing via the "h200" partition.
  No software modules are installed yet.
---

We are happy to announce that two new GPU nodes equipped with the latest **NVIDIA H200 GPUs** are now available on NEMO2.  

Each node is configured with:

- **8× NVIDIA H200 GPUs**
- **192 CPU cores**
- **1.5 TB of RAM**
- **3.8 TB local NVMe storage**

One of these nodes has already been integrated into **NEMO2** and is ready for testing.  
To use it, please submit your jobs with the partition `h200`.

Please note: **no software modules are installed yet** on these nodes.  
You may need to bring your own software environment (e.g. via containers or conda) for testing.

### Example job script

```bash
#!/bin/bash
#SBATCH --job-name=test-h200
#SBATCH --partition=h200
#SBATCH --gres=gpu:1
#SBATCH --cpus-per-task=8
#SBATCH --mem=64G
#SBATCH --time=02:00:00

# load CUDA if available, otherwise use your own environment
module load system/cuda/12.6.0 || true

srun nvidia-smi
```
