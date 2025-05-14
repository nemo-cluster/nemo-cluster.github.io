---
title: End of Life and Milan Nodes in NEMO1
author: NEMO Team
category: news
tags: [NEMO2]
date: 2024-11-15
highlight: false
motd: false
summary: >
  The Genoa partition for NEMO2 will be delivered on December 4th, at the same time all old NEMO1 nodes will be removed.
  To ease the transition, some new Milan nodes will be booted into NEMO1 environment and will remain available until at least January 31st.
  Users are encouraged to switch to the new Milan nodes and use the 'milan' queue for their jobs (-q milan).
  If demand increases, additional nodes will be added next week.
  The launch of NEMO2 is delayed due to unavailable storage, with further updates on testing and data transfer to follow once it becomes available.
---

**UPDATE 19.12.2024:** No queue needs to be specified to submit jobs to the Milan node/partition. With or without the `-q milan` option, the jobs are sent to the same nodes.

The AMD Genoa partition for NEMO2 will arrive on December 4.
To make room for the new nodes, all old NEMO1 nodes will be decommissioned.

To ease the transition from NEMO1 to NEMO2, one rack with the new NEMO2 nodes has been temporarily reconfigured to run the NEMO1 environment.
As an added benefit, this will give more processing power to NEMO1 for the time being.
If we see demand, we can add a total of 17000 cores to NEMO1.

We will keep these AMD Milan nodes in the NEMO1 environment during the migration to NEMO2.
To run jobs on the new nodes, you have to explicitely request them by specifying the `milan` queue:

```shell
msub -q milan ...
```

or in the job script

```shell
#MOAB -q milan
```

Because each Milan node has 128 physical cores, they are configured to run in shared mode.
If your job does not require all 128 cores of a Milan node, it is likely that your job is sharing that node with other users' jobs.
Each node has approximately 500 GB of RAM, which means you can use approximately 3.9 GB per core.
If your jobs do not require more RAM, we recommend that you use `-l pmem=3900M` or less.
Of course, you can always use more memory if needed.

More information about the Milan nodes can be found in the old [news](/news/2024/08/12/storage-milan-partition/).
