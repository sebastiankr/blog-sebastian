---
slug: 2013-08-22-how-hadoop-does-not-scale
title: "How Hadoop does not scale"
template: post.hbs
date: 2013-08-22
categories: [Big Data, Hadoop]
author: Sebastian Kropp
---

<figure class="floatRight">
	<img style="width: 240px;" src="/images/hadoop/hadoop-elephant.png" alt="Hadoop Logo">
	<figcaption>Hadoop Logo</figcaption>
</figure>

We currently read a lot about how good Hadoop scales by mapping data and processes out to commodity nodes. To disappoint you right away, this post is not a general criticism of Hadoop. I do not even want to argue that Hadoop does not scale logarithmically. There are already a lot of papers that look at which algorithms are suited for MapReduce. 

The purpose of this post is to look at slightly different aspects of scale, mostly aspects from an enterprise and financial viewpoint. The meaning of Hadoop changes rapidly. When I refer to Hadoop, I mean the traditional way of batch processing with MapReduce and not the amazing community of ambitious developers trying to find better ways for society to cope with the Big Data challenge. 
<!--fold-->
## Why Hadoop does not scale

### Management and Costs
Let us start with the management problems associated with maintaining a lot of systems in a cluster. Every additional server puts a lot of pressure on an enterprise. It is not only capital expenditures and operational costs of maintaining the systems. There is also asset management, finance, budget planning, networking, increased energy costs, additional cooling, space requirements, and a lot of other things that need to be considered. Numbers for capital and operational expenses vary widely depending on the maturity of an organization. I would love to see studies on this topic. My guess would be that even the indirectly associated costs are substantial. Once you made this investment, it needs to be utilized. Batch jobs require resources only during their execution and create peak workloads. How do you effectively utilize the cluster when jobs finish? How do you plan the schedule and how can you forecast job utilization to even out the workloads?

### Virtualization and the Cloud
With this utilization model, virtualization would be a great use case for Hadoop because it could offer the needed elasticity of compute resources. Virtualization tools would also be of great help in managing the cluster with provisioning automation and service management integration (self-service/ticketing of resource allocation). Problem is, that Hadoop was not designed for the cloud. It would be hard for YARN to discover the real topology of the underlying hardware, since virtualization hides that. On top of that, how much virtualization can a system take before it becomes inefficient? We have the hardware abstraction by the kernel, then the Java Virtual Machine and byte code. If you put that on top of another virtual layer which itself again has some abstractions, it is a long way for the instruction to reach the metal. Could system-level virtualization like Linux Containers or FreeBSD Jails help? 

### Language
Java and other garbage collected languages are not necessarily the best fit for big data. With managing a lot of data, developers will eventually have to deal with tuning the garbage collector. The memory model could be inefficient in other ways too. Java has no unsigned numbers, not many ways to affect memory alignment to optimize cache lines, no complex value types like `structs`, and a lot of heap allocation in general. The Java language and libraries often endorse memory sharing instead of messaging. Messaging constructs with share nothing memory models are considered easier to parallelize and scale. Map, reduce and filter concepts have had a place in functional languages for a long time. This is where map and reduce belongs, in a language. Unfortunately Java has very little support for functional concepts and Hadoop had to be attached on top of it, instead of being integrated in the language. I guess that became apparent and gave rise to higher level languages like Pig had to be introduced to the ecosystem. Now developers have to learn new languages which fragments the pool of developers even further and makes it hard to hire top talent or move that talent inside the enterprise. Additionally the community has to take on developing new languages, which is by no means an easy task. Maybe it might have been a good idea to learn from what functional language research and process algebra had to offer. Was there really a need to reinvent the wheel? Languages like Communicating Sequential Processes [(CSP)](http://en.wikipedia.org/wiki/Communicating_sequential_processes) have channels that the MapReduce jobs could be abstracted upon. Why not use a functional language that takes care of distributing the workload efficiently itself, maybe with the help of parameterized functions where the parameters explain the infrastructure topology and expected volumes/loads. Libraries in modern object oriented languages like C# and C++ expand into this space with `lambdas` and libraries like [TPL](http://en.wikipedia.org/wiki/Parallel_Extensions#Task_Parallel_Library), [PPL](http://en.wikipedia.org/wiki/Parallel_Patterns_Library), and [TBB](http://en.wikipedia.org/wiki/Threading_Building_Blocks). Common to these libraries is that they make use of `promises` and `futures`, which essentially creates message channels between threads and enables truly amazing parallelism. Java will hopefully follow suit with Java 8. 
### Scaling transistors vs scaling a cluster
[Moore's law](http://en.wikipedia.org/wiki/Moore%27s_law) has proven to be good so far. Transistors are doubling every 18 month or so. Hadoop makes use of this exponential growth as well, but not nearly as good as it could. There is no build in way to make use of GPU or other hardware acceleration. Of course you can build that into your distributed functions, but it is not practical for a couple of reasons. In order to make use of the exponential growth, the environment needs to make efficient use of the die. Hadoop lacks that capability. If you want to scale better you make use of the nano-scale.
{% blockquote Richard Feynman http://en.wikipedia.org/wiki/There&#39;s_Plenty_of_Room_at_the_Bottom %}
There's Plenty of Room at the Bottom
{% endblockquote %}
### Batch
For a lot of use cases it is not the most efficient way to design your system with a sequence of batch processes. It is computationally very expensive to recalculate the whole batch just because some data changed. Often the delta that this new data represents can be integrated without a complete re-run. If your current analytics runs days and you need to go to hours, Hadoop is your tool. If you need to go from days to seconds, Hadoop is a dead end. In this case you need to go for an [event-driven architecture](http://en.wikipedia.org/wiki/Event-driven_architecture). 
### Measure and compare scalability
It is hard to measure scalability. The question, would it have been cheaper to build the system in another way, is rarely answered. Hey, you finally have a solution and it works. Who would build the same thing differently just to confirm hypotheses (except science)? All these arguments I made on "Why Hadoop does not scale" are hypotheses and would have to be proven and applied to your specific context. But keep in mind, the claims that it does scale are equally unproven and it all depends on which objective it is measured against. 
But one strong indication for Hadoop’s suboptimal model is the probably biggest compute system called Bitcoin. Bitcoin is a very interesting case, because it is directly measured financially and different approaches compete within these metrics. How fast, how much energy, how much initial costs, operating costs? Well, is this a fair comparison? I would say yes and if to just to prove that Hadoop is not for ideal for everything. The block chain can be compared with HDFS, the miners are distributed on different nodes and they receive data and compute new data.

So if we look at Bitcoin we notice:

* it is not build on Hadoop
* no JVM but native computation
* it first utilized multicore architectures
* then it harnessed GPU computation
* GPU's were superseded by FPGAs
* next was the design of optimized [ASIC's](http://en.wikipedia.org/wiki/Application-specific_integrated_circuit)
* and only then pooling of nodes made sense

## Why Hadoop does scale###
There are obviously reasons for why and how Hadoop _does_ scale.

### Commodity nodes 
Sure, make use of the industry at a whole by piggy backing on advances driven by the big scales of commodity hardware. Supercomputers have long shifted to cluster commodity hardware. But commodity hardware includes more than desktops/servers. Do not forget all the nice gaming stuff like GPUs and physics accelerators, FPGA, etc. But as saw earlier, Hadoop, being a toy elephant himself, has problems playing with GPUs.

### Linux as an operating system
Saving money by using a *"free"* OS is good, if you have a lot of nodes. On top of it, it will save a lot of time trying to understand Microsoft's licensing terms, which seems to double in complexity every 18 month. Additionally it is ideal to automate provisioning processes with UNIX based operating systems. 

### No SQL databases
Saving again on licenses. Most of analytics does not rely on ACID requirements anyway and eventual consistency is good enough. It is much easier to cluster these systems. 

### Open Source
Being able to sit on shoulders of a vibrant community is great. Enterprises can break their dependency from enterprise software vendors like IBM, Oracle or Microsoft. Additionally it ensures access to young talent in this area. 


## Other References
[Virtual Hadoop](https://wiki.apache.org/hadoop/Virtual%20Hadoop)  
[Google Percolator – global search jolt sans MapReduce comedown](http://www.theregister.co.uk/2010/09/24/google_percolator/)  
[Beyond Hadoop: Next-Generation Big Data Architectures](http://www.nytimes.com/external/gigaom/2010/10/23/23gigaom-beyond-hadoop-next-generation-big-data-architectu-81730.html)  
[Why the days are numbered for Hadoop as we know it](http://gigaom.com/2012/07/07/why-the-days-are-numbered-for-hadoop-as-we-know-it/)  
