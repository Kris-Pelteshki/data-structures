# [Bloom Filter](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/bloom-filter)

A bloom filter is a space-efficient probabilistic data structure designed to test whether an element is present in a set. It is designed to be blazingly fast and use minimal memory at the cost of potential false positives. False positive matches are possible, but false negatives are not – in other words, **a query returns either "possibly in set" or "definitely not in set"**.

Bloom proposed the technique for applications where the amount of source data would require an impractically large amount of memory if "conventional" error-free hashing techniques were applied.

## Applications
---

A bloom filter can be used on a blogging website. If the goal is to show readers only articles that they have never seen before, a bloom filter is perfect. It can store hashed values based on the articles. After a user reads a few articles, they can be inserted into the filter. The next time the user visits the site, those articles can be filtered out of the results.

Some articles will inevitably be filtered out by mistake, but the cost is acceptable. It's ok if a user never sees a few articles as long as they have other, brand new ones to see every time they visit the site.