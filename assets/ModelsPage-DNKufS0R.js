import{s as Uh,br as Gh,bs as Dh,p as Nh,k as He,W as Yo,h as Hh,i as Gt,j as Zo,ag as Xo,m as pt,n as Vo,aT as da,aU as fa,aR as ga,a1 as $o,a2 as z,a7 as ue,a8 as Cn,aP as Jo,bd as Jh,a5 as k,a4 as w,aj as Zn,ct as jh,cu as Kh,ak as Oe,aa as Bi,al as ne,ad as P,a3 as Y,ab as we,ae as Ie,be as el,a9 as Yn,aC as Qh,u as Yh,ao as jo,w as Ko,a_ as Qo,a$ as Zh,aq as Xh,ap as Vh,V as qi,bl as $h,bm as ep,bn as np,bt as tp,ac as X,b2 as ip,as as rp,q as Oi,af as ap,a6 as ua,bj as sp}from"./index-TXJ3b7wn.js";import{b as Pi,a as nl,d as ht}from"./QItemLabel-N0Tuub5C.js";import{Q as op}from"./QBtnDropdown-C42hNIOT.js";import{Q as lp}from"./QBanner-BPcX-gg7.js";import{Q as Wn}from"./QTooltip-DDOUOA-g.js";import{Q as cp}from"./QPage-B8NHupkA.js";import{e as up}from"./date-BVOcq_R1.js";import{E as dp}from"./EmbeddingGraph-Di216uMx.js";import{H as fp}from"./H2TitleBlock-DTXRkrgs.js";import{R as gp}from"./ResearchersComponent-DarWxIVZ.js";import{N as mp}from"./NewsFilterComponent-DkFGs-B2.js";import{u as hp}from"./blogs-BvBDs0Ou.js";import{Q as pp}from"./QSelect-OM15RLl1.js";import"./QMenu-BWSXP5HF.js";import"./position-engine-CmvqN1yO.js";import"./QLinearProgress-ZdEG6w_U.js";import"./embedding-CsF9CxY4.js";import"./search-3Rj0LYc6.js";import"./orderBy-CrVI-5xU.js";import"./NewsVerticalCard-CsxxPH0I.js";import"./SXTooltip-DdwgRB16.js";const vp='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',_p=Uh({name:"QSpinnerDots",props:Gh,setup(pe){const{cSize:D,classes:o}=Dh(pe);return()=>Nh("svg",{class:o.value,fill:"currentColor",width:D.value,height:D.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:vp})}}),bp=`---
model_name: "jina-clip-v1"
model_version: "v1"
model_type: "multimodal"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "223M"
language:
  - en
token_length: 8192
image_size: 224x224
output_dimension: 768
release_date: "2024-06-05"
device: "cuda"
api_link: "/?sui&model=jina-clip-v1"
aws: "https://aws.amazon.com/marketplace/pp/prodview-clip-v1"
release_blog: "/news/jina-clip-v1-a-truly-multimodal-embeddings-model-for-text-and-image"
arxiv: "https://arxiv.org/abs/2405.20204"
deprecated_by:
  - jina-clip-v2
related_models:
  - jina-clip-v2
  - jina-embeddings-v3
  - jina-colbert-v2
availability:
  - api
  - huggingface
  - aws
  - azure
tags:
  - multimodal-embedding
  - image-text-alignment
  - english-only
  - zero-shot-classification
  - cross-modal-search
  - long-text-support
  - unified-embeddings
  - text-to-text
  - text-to-image
  - visual-semantic
endpoints:
  - embedding
  - train
  - classify
---

## Overview

Jina CLIP v1 revolutionizes multimodal AI by being the first model to excel equally in both text-to-text and text-to-image retrieval tasks. Unlike traditional CLIP models that struggle with text-only scenarios, this model achieves state-of-the-art performance across all retrieval combinations while maintaining a remarkably compact 223M parameter size. The model addresses a critical industry challenge by eliminating the need for separate models for text and image processing, reducing system complexity and computational overhead. For teams building search systems, recommendation engines, or content analysis tools, Jina CLIP v1 offers a single, efficient solution that handles both text and visual content with exceptional accuracy.

## Methods

The model's architecture represents a significant innovation in multimodal AI design, combining an adapted Jina BERT v2 text encoder with the cutting-edge EVA-02 image encoder from the Beijing Academy for Artificial Intelligence. The text encoder supports sequences up to 12,288 tokens - over 100 times longer than the original CLIP's 77-token limit - while the image encoder efficiently processes 16 patch tokens. The training process follows a novel three-step approach: first, aligning image-caption pairs while maintaining text understanding through interleaved text-pair training; second, incorporating AI-generated longer text descriptions of images; and finally, using hard negative text triplets to enhance semantic distinction capabilities. This unique training methodology enables the model to maintain high performance across both short captions and detailed textual descriptions while preserving strong visual understanding.

## Performance

Jina CLIP v1 demonstrates remarkable improvements over OpenAI's original CLIP across all benchmarks. In text-only retrieval, it achieves a 165% performance increase with a score of 0.429 compared to CLIP's 0.162. For image-related tasks, it shows consistent improvements: 2% better in text-to-image retrieval (0.899), 6% in image-to-text retrieval (0.803), and 12% in image-to-image retrieval (0.916). The model particularly shines in zero-shot visual classification tasks, successfully categorizing images without prior training on specific domains. When evaluated on standard benchmarks like MTEB for text retrieval, CIFAR-100 for image tasks, and Flickr8k/30k and MSCOCO Captions for cross-modal performance, it consistently outperforms specialized single-modality models while maintaining competitive performance in cross-modal tasks.

## Guidance

To effectively deploy Jina CLIP v1, teams should consider both its capabilities and resource requirements. The model processes images in 224x224 pixel tiles, with each tile consuming 1,000 tokens of processing capacity. For optimal performance, implement efficient image preprocessing to match these dimensions. While the model excels at both short and long text processing, it currently only supports English language input. Teams should carefully consider token usage: text requires approximately 1.1 tokens per word, while images are processed in tiles (e.g., a 750x500 pixel image requires 12 tiles, consuming 12,000 tokens). The model is available through both the Jina Embeddings API and as an open-source release on Hugging Face under the Apache 2.0 license, offering flexibility in deployment options. For production environments, consider using the AWS Marketplace or Azure deployment options, which provide optimized infrastructure setups.
`,yp=`---
model_name: "jina-clip-v2"
model_version: "v2"
model_type: "multimodal"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
language:
  - multilingual
token_length: 8192
image_size: 512x512
output_dimension: 1024
release_date: "2024-11-05"
device: "cuda"
api_link: "/?sui&model=jina-clip-v2"
aws: "arn:aws:sagemaker:us-east-1:253352124568:model-package/jina-clip-v2"
arxiv: "https://arxiv.org/abs/2412.08802"
release_blog: "/news/jina-clip-v2-multilingual-multimodal-embeddings-for-text-and-images/"
related_models:
  - jina-clip-v1
parameter_size: "865M"
tags:
  - multimodal-embedding
  - image-text-alignment
  - multilingual
  - large-context
  - instruction-tuned
  - masked-region-learning
  - production
  - cross-lingual-retrieval
  - zero-shot-classification
  - modality-gap-aware
endpoints:
  - embedding
  - train
  - classify
features:
  - instruction_enabled: true
  - mrl_enabled: true
availability:
  - api
  - license
  - huggingface
  - aws
  - azure
  - gcp
---

## Overview

Jina CLIP v2 revolutionizes multimodal AI by bridging the gap between visual and textual understanding across 89 languages. This model solves critical challenges in global e-commerce, content management, and cross-cultural communication by enabling accurate image-text matching regardless of language barriers. For businesses expanding internationally or managing multilingual content, it eliminates the need for separate models per language or complex translation pipelines. The model particularly shines in scenarios requiring precise visual search across language boundaries, such as global marketplace product discovery or multilingual digital asset management.

## Methods

At its core, Jina CLIP v2 employs a sophisticated dual-encoder architecture that combines a Jina XLM-RoBERTa text encoder (561M parameters) with an EVA02-L14 vision encoder (304M parameters). The text encoder processes content in 89 languages with a massive context window of 696,320 tokens, while the vision encoder handles high-resolution images up to 512x512 pixels. The model introduces innovative Matryoshka representation learning, which enables dynamic embedding dimension adjustment from 1024 down to 64 dimensions while preserving performance. This architecture processes both text and images through their respective encoders, projecting them into a shared semantic space where similar concepts align regardless of their original modality or language.

## Performance

The model achieves state-of-the-art performance with 98.0% accuracy on Flickr30k image-to-text retrieval tasks, surpassing both its predecessor and NLLB-CLIP-SigLIP. In multilingual scenarios, it demonstrates up to 4% improvement over NLLB-CLIP-SigLIP in cross-lingual image retrieval tasks, despite having fewer parameters than its largest competitor. The model maintains strong performance even when embeddings are compressed - reducing dimensions by 75% still preserves over 99% of performance across text, image, and cross-modal tasks. On the comprehensive Multilingual MTEB benchmarks, it achieves 69.86% on retrieval and 67.77% on semantic similarity tasks, performing competitively with specialized text embedding models.

## Guidance

For optimal deployment, users should consider several key factors. The model requires CUDA-capable hardware for efficient processing, with memory requirements scaling based on batch size and image resolution. To optimize API costs and performance, resize images to 512x512 pixels before processing - larger images are automatically tiled, increasing token usage and processing time. The model excels at matching images with descriptive text across languages but may struggle with abstract concepts or highly specialized domain-specific content. It's particularly effective for e-commerce product search, content recommendation systems, and visual search applications, but may not be suitable for tasks requiring fine-grained visual detail analysis or highly specialized domain expertise. When using the Matryoshka representation feature, consider the trade-off between dimension reduction and performance - while 64-dimension embeddings maintain strong performance, critical applications may benefit from higher dimensions.
`,wp=`---
model_name: "jina-colbert-v1-en"
model_version: "v1"
model_type: "late-interaction"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "137M"
language:
  - en
token_length: 8192
output_dimension: 128
release_date: "2024-02-17"
device: "cuda"
api_link: "/?sui&model=jina-colbert-v1-en"
release_blog: "/news/what-is-colbert-and-late-interaction-and-why-they-matter-in-search/"
deprecated_by:
  - jina-colbert-v2
tags:
  - english-only
  - late-interaction
  - token-level-matching
  - retrieval
  - reranking
  - multi-vector
endpoints:
  - rank
  - multi-embeddings
  - late-interaction
  - multi-vector
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina-ColBERT-v1-en revolutionizes text search by solving a critical challenge in information retrieval: achieving high accuracy without sacrificing computational efficiency. Unlike traditional models that compress entire documents into single vectors, this model maintains precise token-level understanding while requiring only 137M parameters. For teams building search applications, recommendation systems, or content discovery platforms, Jina-ColBERT-v1-en eliminates the traditional trade-off between search quality and system performance. The model particularly shines in scenarios where nuanced text understanding is crucial, such as technical documentation search, academic paper retrieval, or any application where capturing subtle semantic relationships can make the difference between finding the right information and missing critical content.

## Methods

The model employs an innovative late interaction architecture that fundamentally changes how document retrieval works. Instead of comparing entire documents at once, it processes queries and documents independently until the final matching stage, using an adapted version of the ColBERT approach. The architecture combines two key components: a document encoder that processes text up to 8,192 tokens (over 16 times longer than standard transformers) and a query encoder that creates precise token-level representations. Each token in both query and document gets its own 128-dimensional embedding vector, preserving fine-grained semantic information that would be lost in single-vector models. The late interaction mechanism then enables efficient token-by-token matching between queries and documents, using max-pooling and summation operations to compute final relevance scores without requiring expensive all-to-all comparisons.

## Performance

Jina-ColBERT-v1-en demonstrates remarkable improvements over baseline models across various benchmarks. On the BEIR dataset collection, it achieves superior performance in multiple categories: 49.4% on Arguana (vs. 46.5% for ColBERTv2), 79.5% on FEVER (vs. 78.8%), and 75.0% on TREC-COVID (vs. 72.6%). Most impressively, it shows a dramatic improvement on the LoCo benchmark for long-context understanding, scoring 83.7% compared to ColBERTv2's 74.3%. The model particularly excels in scenarios requiring detailed semantic understanding, outperforming traditional embedding models while maintaining computational efficiency through its innovative late interaction approach. These improvements are achieved while keeping the model's parameter count at a modest 137M, making it both powerful and practical for production deployments.

## Guidance

To effectively deploy Jina-ColBERT-v1-en, teams should consider several practical aspects. The model requires a CUDA-capable GPU for optimal performance, though CPU inference is possible for development. For document processing, the 8,192 token limit translates to approximately 6,000 words, making it suitable for most document types including academic papers, technical documentation, and long-form content. Teams should implement efficient document preprocessing to handle token limits and consider batch processing for large-scale indexing. While the model excels at English language content, it's not designed for multilingual applications or cross-language retrieval. For production deployments, implement proper document chunking strategies and consider using vector similarity indexes (like FAISS) for efficient retrieval. The model is particularly effective when integrated into RAG pipelines using frameworks like RAGatouille, which simplifies the implementation of complex retrieval patterns.
`,xp=`---
model_name: "jina-colbert-v2"
model_version: "v2"
model_type: "colbert"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "560M"
language:
  - multilingual
token_length: 8192
output_dimension: 128
release_date: "2024-08-31"
device: "cuda"
huggingface: "https://huggingface.co/jinaai/jina-colbert-v2"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
api_link: "/?sui&model=jina-colbert-v2"
arxiv: "https://arxiv.org/abs/2408.16672"
release_blog: "/news/jina-colbert-v2-multilingual-late-interaction-retriever-for-embedding-and-reranking"
related_models:
  - jina-colbert-v1-en
tags:
  - multilingual
  - late-interaction
  - long-context
  - high-performance
  - production-ready
  - retriever
  - token-level
  - 89-languages
  - cross-lingual
  - matryoshka
  - storage-efficient
endpoints:
  - rank
  - multi-embeddings
  - late-interaction
  - multi-vector
  - matryoshka-embeddings
supported_languages: 89
availability:
  - api
  - license
  - huggingface
  - aws
  - azure
  - gcp
---

## Overview

Jina-ColBERT-v2 is a groundbreaking multilingual information retrieval model that solves the critical challenge of efficient, high-quality search across multiple languages. As the first multilingual ColBERT-like model to generate compact embeddings, it addresses the growing need for scalable, cost-effective multilingual search solutions in global applications. Organizations dealing with multilingual content, from e-commerce platforms to content management systems, can leverage this model to provide accurate search results across 89 languages while significantly reducing storage and computational costs through its innovative dimension reduction capabilities.

## Methods

The model builds upon the ColBERT architecture, introducing a sophisticated late interaction mechanism that fundamentally changes how queries and documents are matched. At its core, it uses a modified XLM-RoBERTa backbone with 560M parameters, enhanced by rotary position embeddings and optimized with flash attention. The training process involves two key stages: initial pretraining with diverse weakly-supervised data from various languages, followed by fine-tuning with labeled triplet data and supervised distillation. What makes this approach unique is the implementation of Matryoshka representation learning, which enables the model to produce embeddings in multiple dimensions (128, 96, or 64) from a single training process, allowing for dynamic storage optimization without retraining.

## Performance


In real-world testing, Jina-ColBERT-v2 demonstrates exceptional capabilities across multiple benchmarks. It achieves a 6.5% improvement over the original ColBERT-v2 on English tasks, with an average score of 0.521 across 14 BEIR benchmarks. More impressively, it outperforms traditional BM25-based retrieval methods across all tested languages on MIRACL benchmarks, showing particular strength in cross-lingual scenarios. The model maintains this high performance even when using reduced embedding dimensions - dropping from 128 to 64 dimensions results in only a 1.5% performance decrease while halving storage requirements. This translates to significant cost savings in production: for example, storing 100 million documents with 64-dimension vectors costs $659.62 per month on AWS, compared to $1,319.24 for 128 dimensions.

## Guidance

To effectively deploy Jina-ColBERT-v2, teams should consider several practical aspects. The model requires CUDA-capable hardware for optimal performance and supports document lengths up to 8,192 tokens (extendable to 12,288) while limiting queries to 32 tokens. For production deployment, the model is available through the Jina Search Foundation API, AWS marketplace, and Azure, with a non-commercial version accessible via Hugging Face. When implementing, teams should specify whether they're embedding queries or documents, as the model uses asymmetric encoding. The model isn't designed for real-time processing of extremely large document collections without proper indexing, and while it excels at multilingual retrieval, it may show slightly lower performance on specialized domain-specific tasks compared to models fine-tuned for those specific domains.
`,kp=`---
model_name: "jina-embedding-b-en-v1"
model_version: "v1"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "110M"
language:
  - en
token_length: 512
output_dimension: 768
release_date: "2023-06-17"
device: "cuda"
api_link: "/?sui&model=jina-embedding-b-en-v1"
huggingface: "https://huggingface.co/jinaai/jina-embedding-b-en-v1"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
deprecated_by:
  - jina-embeddings-v3
related_models:
  - jina-embeddings-v2-base-en
  - jina-embeddings-v3
tags:
  - text-embedding
  - english
  - base-model
  - legacy
  - bert-based
  - production
availability:
  - huggingface
---

## Overview
Jina Embedding B v1 is a specialized text embedding model designed to transform English text into high-dimensional numerical representations while maintaining semantic meaning. The model addresses the critical need for efficient and accurate text embeddings in production environments, particularly valuable for organizations requiring a balance between computational efficiency and embedding quality. With its 110M parameters generating 768-dimensional embeddings, it serves as a practical solution for teams implementing semantic search, document clustering, or content recommendation systems without requiring extensive computational resources.

## Methods
The model employs a T5 encoder-based architecture enhanced with mean pooling to generate fixed-length representations. Trained on the carefully curated Linnaeus-Clean dataset, which contains 385 million high-quality sentence pairs filtered down from an initial 1.6 billion pairs, the model underwent a two-phase training process. The first phase utilized contrastive learning with InfoNCE loss on text pairs, while the second phase incorporated triplet training to refine the model's ability to distinguish between similar and dissimilar content. This innovative training approach, combined with rigorous data filtering including language detection and consistency checking, enables the model to capture nuanced semantic relationships effectively.

## Performance
In real-world evaluations, Jina Embedding B v1 demonstrates impressive capabilities, particularly in semantic textual similarity tasks. The model achieves state-of-the-art performance on STS12 with a score of 0.751, surpassing established models like all-mpnet-base-v2 and all-minilm-l6-v2. It shows strong performance across various benchmarks while maintaining efficient inference times. However, users should note that the model is specifically optimized for English language content and may not perform optimally on multilingual or code-specific tasks. The model has since been superseded by jina-embeddings-v2-base-en and jina-embeddings-v3, which offer enhanced performance across a broader range of use cases.

## Guidance
For optimal deployment, the model requires a CUDA-capable GPU, though its moderate size allows for efficient inference on standard hardware. The model accepts input sequences up to 512 tokens in length and is particularly well-suited for production environments where consistent, reliable embedding generation is crucial. It performs best on English language content and is ideal for applications like semantic search, document similarity comparison, and content recommendation systems. Teams should consider using the newer v2 or v3 versions for new projects, as they offer improved performance and broader language support. The model is not recommended for tasks requiring multilingual understanding or specialized domain knowledge outside of general English text.
`,Tp=`---
model_name: "jina-embeddings-v2-base-code"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "137M"
language:
    - en
token_length: 8192
output_dimension: 768
release_date: "2024-02-05"
device: "cuda"
api_link: "/?sui&model=jina-embeddings-v2-base-code"
aws: "arn:aws:sagemaker:us-east-1:253352124568:model-package/jina-embeddings-v2-base-code"
release_blog: "/news/elevate-your-code-search-with-new-jina-code-embeddings"
related_models:
  - jina-embeddings-v2-base-en
tags:
  - code-embeddings
  - programming-languages
  - semantic-code-search
  - code-similarity
  - long-context
  - text-embeddings
  - multilingual-code
  - docstring-search
endpoints:
  - embedding
  - fine-tuning
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Embeddings v2 Base Code tackles a critical challenge in modern software development: efficiently navigating and understanding large codebases. For development teams struggling with code discovery and documentation, this model transforms how developers interact with code by enabling natural language search across 30 programming languages. Unlike traditional code search tools that rely on exact pattern matching, this model understands the semantic meaning behind code, allowing developers to find relevant code snippets using plain English descriptions. This capability is particularly valuable for teams maintaining large legacy codebases, developers onboarding to new projects, or organizations looking to improve code reuse and documentation practices.

## Methods

The model achieves its impressive performance through a specialized architecture designed specifically for code understanding. At its core, it uses a transformer-based neural network with 161 million parameters, trained on diverse programming language datasets with emphasis on six major languages: Python, JavaScript, Java, PHP, Go, and Ruby. What makes this architecture unique is its extended context window of 8,192 tokens, allowing it to process entire functions or multiple files at once while maintaining semantic understanding. The model generates dense 768-dimensional embeddings that capture both the syntactic structure and semantic meaning of code, enabling it to understand relationships between different code segments even when they use different programming patterns or syntax to achieve the same goal.

## Performance

In real-world testing, Jina Embeddings v2 Base Code demonstrates exceptional capabilities, leading the field in nine out of fifteen crucial CodeNetSearch benchmarks. When compared to models from industry giants like Microsoft and Salesforce, it achieves superior performance while maintaining a more efficient footprint. The model particularly excels in cross-language code understanding, successfully matching functionally equivalent code snippets across different programming languages. Its 8,192 token context window proves particularly valuable for large functions and complex code files, significantly outperforming traditional models that typically handle only a few hundred tokens. The model's efficiency is evident in its compact size of 307MB (unquantized), enabling fast inference while maintaining high accuracy in code similarity and search tasks.

## Guidance

To effectively deploy Jina Embeddings v2 Base Code, teams should consider several practical aspects. The model integrates seamlessly with popular vector databases like MongoDB, Qdrant, and Weaviate, making it easy to build scalable code search systems. For optimal performance, implement proper code preprocessing to handle the 8,192 token limit, which typically accommodates most function and class definitions. While the model supports 30 programming languages, it shows strongest performance in the six core languages: Python, JavaScript, Java, PHP, Go, and Ruby. Teams should consider using batch processing for large-scale code indexing to optimize performance. The model's RAG compatibility makes it particularly effective for automated documentation generation and code understanding tasks, though teams should implement appropriate chunking strategies for very large codebases. For production deployments, consider using the AWS SageMaker endpoint for managed inference, and implement appropriate caching strategies to optimize query performance.
`,Ap=`---
model_name: "jina-embeddings-v2-base-de"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "161M"
language:
  - en
  - de
token_length: 8192
output_dimension: 768
release_date: "2024-01-15"
device: "cuda"
api_link: "/?sui&model=jina-embeddings-v2-base-de"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
huggingface: "https://huggingface.co/jinaai/jina-embeddings-v2-base-de"
arxiv: "https://arxiv.org/abs/2310.19923"
release_blog: "/news/ich-bin-ein-berliner-german-english-bilingual-embeddings-with-8k-token-length"
related_models:
  - jina-embeddings-v2-base-en
deprecated_by:
  - jina-embeddings-v3
tags:
  - german-language
  - text-embedding
  - monolingual
  - large-context
  - production
  - semantic-search
  - document-retrieval
  - fine-tunable
endpoints:
  - embedding
  - fine-tuning
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Embeddings v2 Base German addresses a critical challenge in international business: bridging the language gap between German and English markets. For German companies expanding into English-speaking territories, where a third of businesses generate over 20% of their global sales, accurate bilingual understanding is essential. This model transforms how organizations handle cross-language content by enabling seamless text understanding and retrieval in both German and English, making it invaluable for companies implementing international documentation systems, customer support platforms, or content management solutions. Unlike traditional translation-based approaches, this model directly maps equivalent meanings in both languages to the same embedding space, enabling more accurate and efficient bilingual operations.

## Methods

The model achieves its impressive bilingual capabilities through an innovative architecture that processes both German and English text within a unified 768-dimensional embedding space. At its core, it employs a transformer-based neural network with 161 million parameters, carefully trained to understand semantic relationships across both languages. What makes this architecture particularly effective is its bias minimization approach, specifically designed to avoid the common pitfall of favoring English grammatical structures - a problem identified in recent research with multilingual models. The model's extended context window of 8,192 tokens allows it to process entire documents or multiple pages of text in a single pass, maintaining semantic coherence across long-form content in both languages.

## Performance

In real-world testing, Jina Embeddings v2 Base German demonstrates exceptional efficiency and accuracy, particularly in cross-language retrieval tasks. The model outperforms Microsoft's E5 base model while being less than a third of its size, and matches the performance of E5 large despite being seven times smaller. Across key benchmarks, including WikiCLIR for English-to-German retrieval, STS17 and STS22 for bidirectional language understanding, and BUCC for precise bilingual text alignment, the model consistently demonstrates superior capabilities. Its compact size of 322MB enables deployment on standard hardware while maintaining state-of-the-art performance, making it particularly efficient for production environments where computational resources are a consideration.

## Guidance

To effectively deploy Jina Embeddings v2 Base German, organizations should consider several practical aspects. The model integrates seamlessly with popular vector databases like MongoDB, Qdrant, and Weaviate, making it straightforward to build scalable bilingual search systems. For optimal performance, implement proper text preprocessing to handle the 8,192 token limit effectively - this typically accommodates about 15-20 pages of text. While the model excels at both German and English content, it's particularly effective when used for cross-language retrieval tasks where query and document languages may differ. Organizations should consider implementing caching strategies for frequently accessed content and use batch processing for large-scale document indexing. The model's AWS SageMaker integration provides a reliable path to production deployment, though teams should monitor token usage and implement appropriate rate limiting for high-traffic applications. When using the model for RAG applications, consider implementing language detection to optimize prompt construction based on the input language.
`,Ip=`---
model_name: "jina-embeddings-v2-base-en"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "137M"
language:
  - en
token_length: 8192
output_dimension: 768
release_date: "2023-10-28"
device: "cuda"
api_link: "/?sui&model=jina-embeddings-v2-base-en"
aws: "https://aws.amazon.com/marketplace/pp/prodview-6h6n4oqbh4wnm"
huggingface: "https://huggingface.co/jinaai/jina-embeddings-v2-base-en"
arxiv: "https://arxiv.org/abs/2310.19923"
release_blog: "/news/jina-ai-launches-worlds-first-open-source-8k-text-embedding-rivaling-openai"
related_models:
  - jina-embedding-b-en-v1
  - jina-embeddings-v3
deprecated_by:
  - jina-embeddings-v3
tags:
  - text-embeddings
  - english
  - long-context
  - production-ready
  - multi-task-learning
  - semantic-search
  - document-retrieval
  - high-performance
  - bert-based
  - fine-tunable
  - rag-optimized
  - 8k-context
endpoints:
  - embedding
  - fine-tuning
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Embeddings v2 Base English is a groundbreaking open-source text embedding model that solves the critical challenge of processing long documents while maintaining high accuracy. Organizations struggling with analyzing extensive legal documents, research papers, or financial reports will find this model particularly valuable. It stands out by handling documents up to 8,192 tokens in length—16 times longer than traditional models—while matching the performance of OpenAI's proprietary solutions. With a compact size of 0.27GB and efficient resource usage, it offers an accessible solution for teams seeking to implement advanced document analysis without excessive computational overhead.

## Methods

The model's architecture combines a BERT Small backbone with an innovative symmetric bidirectional ALiBi (Attention with Linear Biases) mechanism, eliminating the need for traditional positional embeddings. This architectural choice enables the model to extrapolate far beyond its training length of 512 tokens, handling sequences up to 8,192 tokens without performance degradation. The training process involved two key phases: initial pretraining on the C4 dataset, followed by refinement on Jina AI's curated collection of over 40 specialized datasets. This diverse training data, including challenging negative examples and varied sentence pairs, ensures robust performance across different domains and use cases. The model produces 768-dimensional dense vectors that capture nuanced semantic relationships, achieved with a relatively modest 137M parameters.

## Performance

In real-world testing, Jina Embeddings v2 Base English demonstrates exceptional capabilities across multiple benchmarks. It outperforms OpenAI's text-embedding-ada-002 in several key metrics: classification (73.45% vs 70.93%), reranking (85.38% vs 84.89%), retrieval (56.98% vs 56.32%), and summarization (31.6% vs 30.8%). These numbers translate to practical advantages in tasks like document classification, where the model shows superior ability to categorize complex texts, and in search applications, where it better understands user queries and finds relevant documents. However, users should note that performance may vary when dealing with highly specialized domain-specific content not represented in the training data.

## Guidance


To effectively deploy Jina Embeddings v2 Base English, teams should consider several practical aspects. The model requires CUDA-capable hardware for optimal performance, though its efficient architecture means it can run on consumer-grade GPUs. It's available through multiple channels: direct download from Hugging Face, AWS Marketplace deployment, or the Jina AI API with 1M free tokens. For production deployments, AWS SageMaker in the us-east-1 region offers the most scalable solution. The model excels at general-purpose text analysis but may not be the best choice for highly specialized scientific terminology or domain-specific jargon without fine-tuning. When processing long documents, consider breaking them into meaningful semantic chunks rather than arbitrary splits to maintain context integrity. For optimal results, implement proper text preprocessing and ensure clean, well-formatted input data.
`,Cp=`---
model_name: "jina-embeddings-v2-base-es"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "161M"
language:
  - en
  - es
token_length: 8192
output_dimension: 768
release_date: "2024-02-14"
device: "cuda"
huggingface: "https://huggingface.co/jinaai/jina-embeddings-v2-base-es"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
arxiv: "https://arxiv.org/abs/2310.19923"
api_link: "/?sui&model=jina-embeddings-v2-base-es"
release_blog: "/news/aqui-se-habla-espanol-top-quality-spanish-english-embeddings-and-8k-context"
related_models:
  - jina-embeddings-v2-base-en
  - jina-embeddings-v2-base-de
  - jina-embeddings-v2-base-zh
deprecated_by:
  - jina-embeddings-v3
tags:
  - spanish
  - bilingual
  - long-context
  - 8k-context
  - bert-based
  - production-ready
  - semantic-search
  - cross-lingual
  - text-embeddings
  - fine-tunable
endpoints:
  - embedding
  - fine-tuning
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Embeddings v2 Base Spanish is a groundbreaking bilingual text embedding model that addresses the critical challenge of cross-lingual information retrieval and analysis between Spanish and English content. Unlike traditional multilingual models that often show bias towards specific languages, this model delivers truly balanced performance across both Spanish and English, making it indispensable for organizations operating in Spanish-speaking markets or handling bilingual content. The model's most remarkable feature is its ability to generate geometrically aligned embeddings - when texts in Spanish and English express the same meaning, their vector representations naturally cluster together in the embedding space, enabling seamless cross-language search and analysis.

## Methods

At the heart of this model lies an innovative architecture based on symmetric bidirectional ALiBi (Attention with Linear Biases), a sophisticated approach that enables processing of sequences up to 8,192 tokens without traditional positional embeddings. The model utilizes a modified BERT architecture with 161M parameters, incorporating Gated Linear Units (GLU) and specialized layer normalization techniques. Training follows a three-stage process: initial pre-training on a massive text corpus, followed by fine-tuning with carefully curated text pairs, and finally, hard-negative training to enhance discrimination between similar but semantically distinct content. This approach, combined with 768-dimensional embeddings, allows the model to capture nuanced semantic relationships while maintaining computational efficiency.

## Performance

In comprehensive benchmark evaluations, the model demonstrates exceptional capabilities, particularly in cross-language retrieval tasks where it outperforms significantly larger multilingual models like E5 and BGE-M3 despite being only 15-30% of their size. The model achieves superior performance in retrieval and clustering tasks, showing particular strength in matching semantically equivalent content across languages. When tested on the MTEB benchmark, it exhibits robust performance across various tasks including classification, clustering, and semantic similarity. The extended context window of 8,192 tokens proves especially valuable for long-document processing, showing consistent performance even with documents spanning multiple pages - a capability most competing models lack.

## Guidance

To effectively utilize this model, organizations should ensure access to CUDA-capable GPU infrastructure for optimal performance. The model integrates seamlessly with major vector databases and RAG frameworks including MongoDB, Qdrant, Weaviate, and Haystack, making it readily deployable in production environments. It excels in applications such as bilingual document search, content recommendation systems, and cross-language document analysis. While the model shows impressive versatility, it's particularly optimized for Spanish-English bilingual scenarios and may not be the best choice for monolingual applications or scenarios involving other language pairs. For optimal results, input texts should be properly formatted in either Spanish or English, though the model handles mixed-language content effectively. The model supports fine-tuning for domain-specific applications, but this should be approached with careful consideration of the training data quality and distribution.
`,Ep=`---
model_name: "jina-embeddings-v2-base-zh"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "161M"
language:
  - en
  - zh
token_length: 8192
output_dimension: 768
release_date: "2024-01-09"
device: "cuda"
api_link: "/?sui&model=jina-embeddings-v2-base-zh"
huggingface: "https://huggingface.co/jinaai/jina-embeddings-v2-base-zh"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
arxiv: "https://arxiv.org/abs/2310.19923"
release_blog: "/news/8k-token-length-bilingual-embeddings-break-language-barriers-in-chinese-and-english"
related_models:
  - jina-embeddings-v2-base-en
  - jina-embeddings-v3
deprecated_by:
  - jina-embeddings-v3
tags:
  - text-embedding
  - chinese
  - multilingual
  - base-model
  - production
  - long-context
  - high-dimension
endpoints:
  - embedding
  - fine-tuning
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Embeddings v2 Base Chinese breaks new ground as the first open-source model to seamlessly handle both Chinese and English text with an unprecedented 8,192 token context length. This bilingual powerhouse addresses a critical challenge in global business: the need for accurate, long-form document processing across Chinese and English content. Unlike traditional models that struggle with cross-lingual understanding or require separate models for each language, this model maps equivalent meanings in both languages to the same embedding space, making it invaluable for organizations expanding globally or managing multilingual content.

## Methods

The model's architecture combines a BERT-based backbone with symmetric bidirectional ALiBi (Attention with Linear Biases), enabling efficient processing of long sequences without the traditional 512-token limitation. The training process follows a carefully orchestrated three-phase approach: initial pre-training on high-quality bilingual data, followed by primary and secondary fine-tuning stages. This methodical training strategy, coupled with the model's 161M parameters and 768-dimensional output, achieves remarkable efficiency while maintaining balanced performance across both languages. The symmetric bidirectional ALiBi mechanism represents a significant innovation, allowing the model to handle documents up to 8,192 tokens in length—a capability previously limited to proprietary solutions.

## Performance

In benchmarks on the Chinese MTEB (C-MTEB) leaderboard, the model demonstrates exceptional performance among models under 0.5GB, particularly excelling in Chinese language tasks. It significantly outperforms OpenAI's text-embedding-ada-002 in Chinese-specific applications while maintaining competitive performance in English tasks. A notable improvement in this release is the refined similarity score distribution, addressing the score inflation issues present in the preview version. The model now provides more distinct and logical similarity scores, ensuring more accurate representation of semantic relationships between texts. This enhancement is particularly evident in comparative tests, where the model shows superior discrimination between related and unrelated content in both languages.

## Guidance


The model requires 322MB of storage and can be deployed through multiple channels including AWS SageMaker (us-east-1 region) and the Jina AI API. While GPU acceleration isn't mandatory, it can significantly improve processing speed for production workloads. The model excels in various applications including document analysis, multilingual search, and cross-lingual information retrieval, but users should note that it's specifically optimized for Chinese-English bilingual scenarios. For optimal results, input text should be properly segmented, and while the model can handle up to 8,192 tokens, breaking extremely long documents into semantically meaningful chunks is recommended for better performance. The model may not be suitable for tasks requiring real-time processing of very short texts where lower-latency, specialized models might be more appropriate.
`,Mp=`---
model_name: "jina-embeddings-v3"
model_version: "v3"
model_type: "text-embeddings"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "570M"
language:
  - multilingual
token_length: 262144
output_dimension: 1024
release_date: "2024-09-18"
device: "cuda"
api_link: "/?sui&model=jina-embeddings-v3"
huggingface: "https://huggingface.co/jinaai/jina-embeddings-v3"
arxiv: "https://arxiv.org/abs/2409.10173"
aws: "arn:aws:sagemaker:us-east-1:253352124568:model-package/jina-embeddings-v3"
azure: ""
gcp: ""
release_blog: "/news/jina-embeddings-v3-a-frontier-multilingual-embedding-model"
related_models:
  - jina-embeddings-v2-base-en
  - jina-embeddings-v2-base-zh
  - jina-embeddings-v2-base-de
  - jina-embeddings-v2-base-es
  - jina-embeddings-v2-base-code
tags:
  - text-embedding
  - multilingual
  - high-dimension
  - long-context
  - production
  - base-model
  - matryoshka
  - lora-adapters
endpoints:
  - embedding
  - fine-tuning
  - train
  - classify
  - late_chunking
availability:
  - api
  - license
  - huggingface
  - aws
  - azure
  - gcp
---

## Overview

Jina Embeddings v3 is a groundbreaking multilingual text embedding model that transforms how organizations handle text understanding and retrieval across languages. At its core, it solves the critical challenge of maintaining high performance across multiple languages and tasks while keeping computational requirements manageable. The model particularly shines in production environments where efficiency matters - it achieves state-of-the-art performance with just 570M parameters, making it accessible for teams that can't afford the computational overhead of larger models. Organizations needing to build scalable, multilingual search systems or analyze content across language barriers will find this model especially valuable.

## Methods

The model's architecture represents a significant innovation in embedding technology, built on a foundation of jina-XLM-RoBERTa with 24 layers and enhanced with task-specific Low-Rank Adaptation (LoRA) adapters. LoRA adapters are specialized neural network components that optimize the model for different tasks like retrieval, classification, or clustering without increasing the parameter count significantly - they add less than 3% to the total parameters. The model incorporates Matryoshka Representation Learning (MRL), allowing embeddings to be flexibly reduced from 1024 to as low as 32 dimensions while preserving performance. Training involved a three-stage process: initial pre-training on multilingual text from 89 languages, fine-tuning on paired texts for embedding quality, and specialized adapter training for task optimization. The model supports context lengths up to 8,192 tokens through Rotary Position Embeddings (RoPE), with an innovative base frequency adjustment technique that improves performance on both short and long texts.

## Performance

The model demonstrates exceptional efficiency-to-performance ratio in real-world testing, outperforming both open-source alternatives and proprietary solutions from OpenAI and Cohere on English tasks while excelling in multilingual scenarios. Most surprisingly, it achieves better results than e5-mistral-7b-instruct, which has 12 times more parameters, highlighting its remarkable efficiency. In MTEB benchmark evaluations, it achieves an average score of 65.52 across all tasks, with particularly strong performance in Classification Accuracy (82.58) and Sentence Similarity (85.80). The model maintains consistent performance across languages, scoring 64.44 on multilingual tasks. When using MRL for dimension reduction, it retains strong performance even at lower dimensions - for example, maintaining 92% of its retrieval performance at 64 dimensions compared to the full 1024 dimensions.

## Guidance

To effectively deploy Jina Embeddings v3, teams should consider their specific use case to select the appropriate task adapter: retrieval.query and retrieval.passage for search applications, separation for clustering tasks, classification for categorization, and text-matching for semantic similarity. The model requires CUDA-capable hardware for optimal performance, though its efficient architecture means it needs significantly less GPU memory than larger alternatives. For production deployment, AWS SageMaker integration provides a streamlined path to scalability. The model excels in multilingual applications but may require additional evaluation for low-resource languages. While it supports long documents up to 8,192 tokens, optimal performance is achieved with the late chunking feature for very long texts. Teams should avoid using the model for tasks requiring real-time generation or complex reasoning - it's designed for embedding and retrieval, not text generation or direct question answering.
`,Sp=`---
model_name: "jina-reranker-v1-base-en"
model_version: "v1"
model_type: "reranker"
organization: "Jina AI"
huggingface: "https://huggingface.co/jina-ai/jina-reranker-v1-base-en"
release_blog: "/news/maximizing-search-relevancy-and-rag-accuracy-with-jina-reranker"
api_link: "/?sui&model=jina-reranker-v1-base-en"
aws: "https://aws.amazon.com/marketplace/pp/prodview-6dmufr42yb2hi"
license: "Apache-2.0"
parameter_size: "137M"
release_date: "2024-02-29"
language:
  - en
token_length: 262144
device: "cuda"
related_models:
  - jina-reranker-v1-turbo-en
  - jina-reranker-v1-tiny-en
deprecated_by:
  - jina-reranker-v2-base-multilingual
tags:
  - reranker
  - english
  - base-model
  - high-precision
  - long-context
  - search-refinement
  - document-ranking
endpoints:
  - rank
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Reranker v1 Base English revolutionizes search result refinement by addressing a critical limitation in traditional vector search systems: the inability to capture nuanced relationships between queries and documents. While vector search with cosine similarity provides fast initial results, it often misses subtle relevance signals that human users intuitively understand. This reranker bridges that gap by performing sophisticated token-level analysis of both queries and documents, delivering a remarkable 20% improvement in search accuracy. For organizations struggling with search precision or implementing RAG systems, this model offers a powerful solution that significantly improves result quality without requiring a complete overhaul of existing search infrastructure.

## Methods

The model employs a BERT-based cross-attention architecture that fundamentally differs from traditional embedding-based approaches. Instead of comparing pre-computed document embeddings, it performs dynamic token-level interactions between queries and documents, enabling it to capture contextual nuances that simple similarity metrics miss. The architecture's 137M parameters are carefully structured to enable deep semantic understanding while maintaining computational efficiency. A standout innovation is its ability to handle sequences up to 262,144 tokens—far beyond typical model limitations—achieved through sophisticated optimization techniques that maintain fast inference speeds despite the increased context window.

## Performance


In comprehensive benchmarks, the model demonstrates exceptional improvements across key metrics, achieving an 8% increase in hit rate and a 33% boost in mean reciprocal rank compared to baseline vector search. On the BEIR benchmark, it achieves an average score of 0.5588, outperforming other rerankers from BGE (0.5032), BCE (0.4969), and Cohere (0.5141). Particularly impressive is its performance on the LoCo benchmark, where it scores 0.873 on average, significantly ahead of competitors in understanding local coherence and context-aware ranking. The model shows particular strength in technical content evaluation, achieving scores of 0.996 on qasper_abstract tasks and 0.962 on government report analysis, though it shows relatively lower performance (0.466) on meeting summarization tasks.

## Guidance

The model requires CUDA-capable hardware for optimal performance and is accessible through both API endpoints and AWS SageMaker deployment options. While it can process extremely long sequences, users should consider the trade-off between context length and processing time—the model's latency increases notably with longer documents, from 156ms for 256 tokens to 7068ms for 4096 tokens with a 512-token query. For production deployments, it's recommended to implement a two-stage pipeline where vector search provides initial candidates for reranking. The model is specifically optimized for English content and may not perform optimally on multilingual or code-heavy documents. When integrating with RAG systems, users should carefully tune the number of documents sent for reranking based on their latency requirements, with 100-200 documents typically providing a good balance between quality and performance.
`,zp=`---
model_name: "jina-reranker-v1-tiny-en"
model_version: "v1"
model_type: "reranker"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "33M"
language:
  - en
token_length: 262144
device: "cuda"
release_date: "2024-04-18"
huggingface: "https://huggingface.co/jinaai/jina-reranker-v1-tiny-en"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
api_link: "/?sui&model=jina-reranker-v1-tiny-en"
release_blog: "/news/smaller-faster-cheaper-jina-rerankers-turbo-and-tiny"
related_models:
  - jina-reranker-v1-base-en
  - jina-reranker-v1-turbo-en
deprecated_by:
  - jina-reranker-v2-base-multilingual
tags:
  - reranker
  - english
  - long-context
  - memory-efficient
  - high-throughput
  - edge-optimized
  - bert-based
  - production-ready
  - lightweight
  - fast-inference
endpoints:
  - rank
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Reranker v1 Tiny English represents a breakthrough in efficient search refinement, designed specifically for organizations requiring high-performance reranking in resource-constrained environments. This model addresses the critical challenge of maintaining search quality while significantly reducing computational overhead and deployment costs. With just 33M parameters - a fraction of typical reranker sizes - it delivers remarkably competitive performance through innovative knowledge distillation techniques. The model's most surprising feature is its ability to process documents nearly five times faster than base models while maintaining over 92% of their accuracy, making enterprise-grade search refinement accessible to applications where computational resources are at a premium.

## Methods

The model employs a streamlined four-layer architecture based on JinaBERT with symmetric bidirectional ALiBi (Attention with Linear Biases), enabling efficient processing of long sequences. Its development leverages an advanced knowledge distillation approach where a larger, high-performance teacher model (jina-reranker-v1-base-en) guides the training process, allowing the smaller model to learn optimal ranking behaviors without requiring extensive real-world training data. This innovative training methodology, combined with architectural optimizations like reduced hidden layers and efficient attention mechanisms, enables the model to maintain high-quality rankings while significantly reducing computational requirements. The result is a model that achieves remarkable efficiency without compromising its ability to understand complex document relationships.

## Performance

In comprehensive benchmark evaluations, the model demonstrates exceptional capabilities that challenge the conventional trade-off between size and performance. On the BEIR benchmark, it achieves an NDCG@10 score of 48.54, retaining 92.5% of the base model's performance while being just a quarter of its size. Even more impressively, in LlamaIndex RAG benchmarks, it maintains an 83.16% hit rate, nearly matching larger models while processing documents significantly faster. The model particularly excels in throughput, processing documents almost five times faster than the base model while using 13% less memory than even the turbo variant. These metrics translate to real-world performance that rivals or exceeds much larger models like mxbai-rerank-base-v1 (184M parameters) and bge-reranker-base (278M parameters).

## Guidance

To effectively deploy this model, organizations should prioritize scenarios where processing speed and resource efficiency are critical considerations. The model is particularly well-suited for edge computing deployments, mobile applications, and high-throughput search systems where latency requirements are strict. While it performs exceptionally well across most reranking tasks, it's important to note that for applications requiring the absolute highest level of ranking precision, the base model might still be preferable. The model requires CUDA-capable GPU infrastructure for optimal performance, though its efficient architecture means it can run effectively on less powerful hardware than its larger counterparts. For deployment, the model integrates seamlessly with major vector databases and RAG frameworks, and it's available through both the Reranker API and AWS SageMaker. When fine-tuning for specific domains, users should carefully balance the training data quality with the model's compact architecture to maintain its performance characteristics.
`,Rp=`---
model_name: "jina-reranker-v1-turbo-en"
model_version: "v1"
model_type: "reranker"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "37.8M"
language:
  - en
token_length: 8192
device: "cuda"
release_date: "2024-04-18"
huggingface: "https://huggingface.co/jinaai/jina-reranker-v1-turbo-en"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
api_link: "/?sui&model=jina-reranker-v1-turbo-en"
release_blog: "/news/smaller-faster-cheaper-jina-rerankers-turbo-and-tiny"
related_models:
  - jina-reranker-v1-base-en
  - jina-reranker-v1-tiny-en
deprecated_by:
  - jina-reranker-v2-base-multilingual
tags:
  - high-speed
  - memory-efficient
  - english
  - production-ready
  - reranker
  - rag-optimized
  - high-performance
  - cost-effective
endpoints:
  - rank
availability:
  - api
  - huggingface
  - aws
  - azure
---

## Overview

Jina Reranker v1 Turbo English addresses a critical challenge in production search systems: the trade-off between result quality and computational efficiency. While traditional rerankers offer improved search accuracy, their computational demands often make them impractical for real-time applications. This model breaks that barrier by delivering 95% of the base model's accuracy while processing documents three times faster and using 75% less memory. For organizations struggling with search latency or computational costs, this model offers a compelling solution that maintains high-quality search refinement while significantly reducing infrastructure requirements and operational costs.

## Methods

The model achieves its efficiency through an innovative six-layer architecture that compresses the sophisticated reranking capabilities of its larger counterpart into just 37.8 million parameters—a dramatic reduction from the base model's 137 million. This streamlined design employs knowledge distillation, where the larger base model acts as a teacher, training the turbo variant to match its behavior while using fewer resources. The architecture maintains the core BERT-based cross-attention mechanism for token-level interactions between queries and documents, but optimizes it for speed through reduced layer count and efficient parameter allocation. The model supports sequences up to 8,192 tokens, enabling comprehensive document analysis while maintaining fast inference speeds through sophisticated optimization techniques.

## Performance


In comprehensive benchmarks, the turbo variant demonstrates remarkable efficiency without significant accuracy trade-offs. On the BEIR benchmark, it achieves an NDCC@10 score of 49.60, retaining 95% of the base model's performance (52.45) while outperforming many larger competitors like bge-reranker-base (47.89, 278M parameters). In RAG applications, it maintains an impressive 83.51% hit rate and 0.6498 MRR, showing particular strength in practical retrieval tasks. The model's speed improvements are even more striking—it processes documents three times faster than the base model, with throughput scaling nearly linearly with reduced parameter count. However, users should note slightly lower performance on extremely nuanced ranking tasks where the full parameter count of larger models provides marginal advantages.

## Guidance

The model requires CUDA-capable hardware for optimal performance and can be deployed through AWS SageMaker or accessed via API endpoints. For production deployments, organizations should implement a two-stage pipeline where vector search provides initial candidates for reranking. While the model supports 8,192 tokens, users should consider the latency impact of longer sequences—processing time increases with document length. The sweet spot for most applications is reranking 100-200 candidates per query, which balances quality and speed. The model is specifically optimized for English content and may not perform optimally on multilingual documents. Memory requirements are significantly lower than the base model, typically requiring only 150MB of GPU memory compared to 550MB, making it suitable for deployment on smaller instances and enabling significant cost savings in cloud environments.
`,Lp=`---
model_name: "jina-reranker-v2-base-multilingual"
model_version: "v2"
model_type: "reranker"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "278M"
language:
  - multilingual
token_length: 524288
device: "cuda"
release_date: "2024-06-25"
huggingface: "https://huggingface.co/jinaai/jina-reranker-v2-base-multilingual"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
api_link: "/?sui&model=jina-reranker-v2-base-multilingual"
release_blog: "/news/jina-reranker-v2-for-agentic-rag-ultra-fast-multilingual-function-calling-and-code-search"
related_models:
  - jina-reranker-v1-base-en
  - jina-reranker-v1-turbo-en
  - jina-reranker-v1-tiny-en
tags:
  - multilingual
  - cross-lingual
  - function-calling
  - code-search
  - long-context
  - production-ready
  - reranker
  - rag-optimized
  - high-performance
  - 100-languages
endpoints:
  - rank
availability:
  - api
  - license
  - huggingface
  - aws
  - azure
  - gcp
---

## Overview
Jina Reranker v2 Base Multilingual is a cross-encoder model designed to enhance search accuracy across language barriers and data types. This reranker addresses the critical challenge of precise information retrieval in multilingual environments, particularly valuable for global enterprises needing to refine search results across different languages and content types. With support for over 100 languages and unique capabilities in function calling and code search, it serves as a unified solution for teams requiring accurate search refinement across international content, API documentation, and multilingual codebases. The model's compact 278M parameter design makes it particularly appealing for organizations seeking to balance high performance with resource efficiency.

## Methods
The model employs a cross-encoder architecture enhanced with Flash Attention 2, enabling direct comparison between queries and documents for more accurate relevance assessment. Trained through a four-stage process, the model first establishes English language capabilities, then progressively incorporates cross-lingual and multilingual data, before final refinement with hard-negative examples. This innovative training approach, combined with the Flash Attention 2 implementation, allows the model to process sequences up to 524,288 tokens while maintaining exceptional speed. The architecture's efficiency enables it to handle complex reranking tasks across multiple languages with 6x higher throughput compared to its predecessor, while ensuring accurate relevance assessment through direct query-document interaction.

## Performance
In real-world evaluations, the model demonstrates exceptional capabilities across diverse benchmarks. It achieves state-of-the-art performance on the AirBench leaderboard for RAG systems and shows strong results in multilingual tasks, including the MKQA dataset covering 26 languages. The model excels particularly in structured data tasks, achieving high recall scores in both function calling (ToolBench benchmark) and SQL schema matching (NSText2SQL benchmark). Most impressively, it delivers these results while processing documents 15 times faster than comparable models like bge-reranker-v2-m3, making it practical for real-time applications. However, users should note that optimal performance requires a CUDA-capable GPU for inference.

## Guidance
For optimal deployment, the model requires a CUDA-capable GPU and can be accessed through multiple channels including the Reranker API, major RAG frameworks like Haystack and LangChain, or deployed privately via cloud marketplaces. The model excels in scenarios requiring precise understanding across language barriers and data types, making it ideal for global enterprises working with multilingual content, API documentation, or code repositories. Its extensive context window of 524,288 tokens enables processing of large documents or entire codebases in a single pass. Teams should consider using this model when they need to enhance search accuracy across languages, require function calling capabilities for agentic RAG systems, or want to improve code search functionality across multilingual codebases. The model is particularly effective when used in conjunction with vector search systems, where it can significantly improve the final ranking of retrieved documents.
`,qp=`---
model_name: "reader-lm-0.5b"
model_version: "v1"
model_type: "reader"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "494M"
language:
  - multilingual
token_length: 262144
device: "cuda"
api_link: "/?sui&model=reader-lm-0.5b"
huggingface: "https://huggingface.co/jinaai/reader-lm-0.5b"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
release_blog: "/news/reader-lm-small-language-models-for-cleaning-and-converting-html-to-markdown"
related_models:
  - reader-lm-1.5b
release_date: "2024-08-11"
tags:
  - text-understanding
  - multilingual
  - document-processing
  - resource-efficient
  - long-context
  - base-model
  - language-model
endpoints:
  - read
availability:
  - license
  - huggingface
  - aws
  - azure
---

## Overview

Reader LM 0.5B is a specialized language model designed to solve the complex challenge of converting HTML documents into clean, structured markdown text. This model addresses a critical need in modern data processing pipelines: efficiently transforming messy web content into a format that's ideal for LLMs and documentation systems. Unlike general-purpose language models that require massive computational resources, Reader LM 0.5B achieves professional-grade HTML processing with just 494M parameters, making it accessible to teams with limited computing resources. Organizations dealing with web content processing, documentation automation, or building LLM-powered applications will find this model particularly valuable for streamlining their content preparation workflows.

## Methods

The model employs an innovative "shallow-but-wide" architecture specifically optimized for selective-copy operations rather than creative text generation. Built on a decoder-only foundation with 24 layers and 896 hidden dimensions, the model uses specialized attention mechanisms with 14 query heads and 2 key-value heads to efficiently process input sequences. The training process involved two distinct stages: first with shorter, simpler HTML (32K tokens) to learn basic conversion patterns, then with complex, real-world HTML (128K tokens) to handle challenging cases. The model incorporates contrastive search during training and implements a repetition detection mechanism to prevent degeneration issues like token loops. A unique aspect of its architecture is the zigzag-ring-attention mechanism, which enables the model to handle extremely long sequences up to 256K tokens while maintaining stable performance.

## Performance

In real-world testing, Reader LM 0.5B demonstrates impressive efficiency-to-performance ratios across multiple metrics. The model achieves a ROUGE-L score of 0.56, indicating strong content preservation, and maintains a low token error rate of 0.34, showing minimal hallucination. In qualitative evaluations across 22 diverse HTML sources including news articles, blog posts, and e-commerce pages in multiple languages, it shows particular strength in structure preservation and markdown syntax usage. The model excels at handling complex modern web pages where inline CSS and scripts can expand to hundreds of thousands of tokens - a scenario where traditional rule-based approaches often fail. However, it's important to note that while the model performs exceptionally well on straightforward HTML-to-markdown conversion tasks, it may require additional processing for highly dynamic or JavaScript-heavy pages.

## Guidance

To effectively deploy Reader LM 0.5B, teams should ensure their infrastructure can handle the model's CUDA requirements, though its efficient architecture means it can run on consumer-grade GPUs. The model works best with raw HTML input and doesn't require special prefixes or instructions. For optimal performance, implement the provided repetition detection mechanism to prevent potential token loops in output generation. While the model supports multiple languages and various HTML structures, it's specifically designed for content extraction and markdown conversion - it shouldn't be used for tasks like text generation, summarization, or direct question answering. The model is available through AWS SageMaker for production deployment, and a Google Colab notebook is provided for testing and experimentation. Teams should be aware that while the model can handle extremely long documents up to 256K tokens, processing such large inputs may require additional memory management strategies.
`,Op=`---
model_name: "reader-lm-1.5b"
model_version: "v1"
model_type: "reader"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "1.54B"
language:
  - multilingual
token_length: 262144
device: "cuda"
release_date: "2024-08-11"
api_link: "/?sui&model=reader-lm-1.5b"
huggingface: "https://huggingface.co/jinaai/reader-lm-1.5b"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
release_blog: "/news/reader-lm-small-language-models-for-cleaning-and-converting-html-to-markdown"
related_models:
  - reader-lm-0.5b
tags:
  - reader
  - language-model
  - multilingual
  - document-processing
  - long-context
  - text-understanding
  - content-extraction
  - cross-lingual
endpoints:
  - read
availability:
  - license
  - huggingface
  - aws
  - azure
---

## Overview

Reader LM 1.5B represents a breakthrough in efficient document processing, addressing the critical challenge of converting complex web content into clean, structured formats. This specialized language model tackles a fundamental problem in modern AI pipelines: the need to efficiently process and clean HTML content for downstream tasks without relying on brittle rule-based systems or resource-intensive large language models. What makes this model truly remarkable is its ability to outperform models 50 times its size while maintaining a surprisingly compact 1.54B parameter footprint. Organizations dealing with large-scale web content processing, documentation automation, or content management systems will find this model particularly valuable for its ability to handle extremely long documents while delivering superior accuracy in HTML-to-markdown conversion.

## Methods

The model employs an innovative "shallow-but-wide" architecture that challenges traditional scaling approaches in language model design. At its core are 28 transformer layers configured with 12 query heads and 2 key-value heads, creating a unique balance that optimizes for selective-copy operations while maintaining deep semantic understanding. The architecture features a hidden size of 1536 and an intermediate size of 8960, carefully tuned to handle sequences up to 256K tokens. The training process involved two distinct stages: first focusing on short-and-simple HTML with 32K token sequences, then advancing to long-and-hard HTML with 128K tokens, implementing zigzag-ring-attention for efficient processing. This approach, combined with contrastive search and specialized repetition detection mechanisms, enables the model to avoid common issues like degeneration and dull loops that typically plague smaller language models handling complex document processing tasks.

## Performance


In comprehensive benchmark evaluations, Reader LM 1.5B demonstrates exceptional capabilities that challenge industry standards. The model achieves a ROUGE-L score of 0.72 and a Token Error Rate of 0.19, significantly outperforming larger models like GPT-4 (0.43 ROUGE-L, 0.50 TER) and Gemini-1.5-Pro (0.42 ROUGE-L, 0.48 TER) in HTML-to-markdown conversion tasks. Its performance particularly shines in qualitative evaluations across four key dimensions: header extraction, main content extraction, rich structure preservation, and markdown syntax usage. The model consistently maintains high accuracy across diverse document types, from news articles and blog posts to landing pages and forum posts, in multiple languages including English, German, Japanese, and Chinese. This performance is achieved while processing documents up to 256K tokens in length, eliminating the need for expensive chunking operations that are typically required with larger models.

## Guidance

To effectively deploy Reader LM 1.5B, organizations should focus on scenarios involving complex HTML document processing where accuracy and efficiency are paramount. The model requires CUDA-capable GPU infrastructure for optimal performance, though its efficient architecture means it can run effectively on more modest hardware compared to larger alternatives. For production deployments, the model is available through both AWS SageMaker and Azure Marketplace, offering flexible integration options. While the model excels at HTML-to-markdown conversion, it's important to note that it's specifically optimized for this task and may not be suitable for general-purpose text generation or other NLP tasks. When processing extremely long documents (approaching 512K tokens), users should be aware that performance might degrade as this exceeds the model's training parameters. For optimal results, implement the provided repetition detection mechanisms and consider using contrastive search during inference to maintain output quality.
`;function Bp(){const pe=He([]),D=(o,g)=>{const[Ce,nn,...B]=o.split("---"),_={};let E=null,oe=!1,Ee=!1,$={};if(nn.split(`
`).forEach(Je=>{const de=Je.trim();if(!(!de||de.startsWith("#"))){if(de.startsWith("- ")){const fe=de.substring(2);Ee&&E==="metrics"?fe.startsWith("name:")?(Object.keys($).length>0&&(_.metrics=_.metrics||[]).push($),$={name:fe.substring(5).trim()}):fe.startsWith("value:")&&($.value=parseFloat(fe.substring(6).trim())||fe.substring(6).trim()):E&&(Array.isArray(_[E])||(_[E]=[]),_[E].push(fe));return}if(de.includes(":")){const[fe,...re]=de.split(":"),ve=fe.trim(),le=re.join(":").trim();E=ve,oe=le==="",Ee=ve==="metrics",!oe&&!Ee?_[ve]=le.replace(/^["'](.*)["']$/,"$1"):oe&&(_[ve]=[])}}}),Ee&&Object.keys($).length>0&&(_.metrics=_.metrics||[]).push($),!_.model_name||!_.model_version||!_.model_type||!_.organization||!_.license||!_.tags)throw new Error(`Missing required metadata fields in model ${g}`);const hn={model_name:_.model_name,model_version:_.model_version,model_type:_.model_type,organization:_.organization,license:_.license,token_length:_.token_length,image_size:_.image_size,tags:_.tags||[],architecture:_.architecture,parameter_size:_.parameter_size,training_data:_.training_data,input_format:_.input_format,output_dimension:_.output_dimension,language:_.language||[],metrics:_.metrics,quantization:_.quantization,intended_use:_.intended_use,limitations:_.limitations,ethical_considerations:_.ethical_considerations,hardware_requirements:_.hardware_requirements,api_type:_.api_type,api_link:_.api_link,aws:_.aws,release_blog:_.release_blog,deprecated_by:_.deprecated_by,related_models:_.related_models,arxiv:_.arxiv,huggingface:_.huggingface,endpoints:_.endpoints||[],release_date:_.release_date,availability:_.availability||[]};return{slug:g,name:hn.model_name,metadata:hn,content:B.join("---").trim()}};return Yo(async()=>{try{const o=Object.assign({"../content/models/jina-clip-v1.md":bp,"../content/models/jina-clip-v2.md":yp,"../content/models/jina-colbert-v1-en.md":wp,"../content/models/jina-colbert-v2.md":xp,"../content/models/jina-embedding-b-en-v1.md":kp,"../content/models/jina-embeddings-v2-base-code.md":Tp,"../content/models/jina-embeddings-v2-base-de.md":Ap,"../content/models/jina-embeddings-v2-base-en.md":Ip,"../content/models/jina-embeddings-v2-base-es.md":Cp,"../content/models/jina-embeddings-v2-base-zh.md":Ep,"../content/models/jina-embeddings-v3.md":Mp,"../content/models/jina-reranker-v1-base-en.md":Sp,"../content/models/jina-reranker-v1-tiny-en.md":zp,"../content/models/jina-reranker-v1-turbo-en.md":Rp,"../content/models/jina-reranker-v2-base-multilingual.md":Lp,"../content/models/reader-lm-0.5b.md":qp,"../content/models/reader-lm-1.5b.md":Op});pe.value=Object.entries(o).map(([g,Ce])=>{var B;const nn=((B=g.split("/").pop())==null?void 0:B.replace(".md",""))||"";return D(Ce,nn)})}catch(o){console.error("Error loading model files:",o),pe.value=[]}}),{models:pe}}var Wi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Wi.exports;(function(pe,D){(function(){var o,g="4.17.21",Ce=200,nn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",B="Expected a function",_="Invalid `variable` option passed into `_.template`",E="__lodash_hash_undefined__",oe=500,Ee="__lodash_placeholder__",$=1,hn=2,Je=4,de=1,fe=2,re=1,ve=2,le=4,_e=8,Me=16,xe=32,tn=64,je=128,Se=256,vt=512,_t=30,En="...",Fi=800,bt=16,Xn=1,yt=2,Ui=3,cn=1/0,un=9007199254740991,Gi=17976931348623157e292,Vn=NaN,ge=4294967295,Dt=ge-1,Nt=ge>>>1,Di=[["ary",je],["bind",re],["bindKey",ve],["curry",_e],["curryRight",Me],["flip",vt],["partial",xe],["partialRight",tn],["rearg",Se]],pn="[object Arguments]",Fn="[object Array]",C="[object AsyncFunction]",L="[object Boolean]",N="[object Date]",Be="[object DOMException]",dn="[object Error]",$n="[object Function]",Ht="[object GeneratorFunction]",Pe="[object Map]",wt="[object Number]",tl="[object Null]",vn="[object Object]",ma="[object Promise]",il="[object Proxy]",xt="[object RegExp]",rn="[object Set]",kt="[object String]",Jt="[object Symbol]",rl="[object Undefined]",Tt="[object WeakMap]",al="[object WeakSet]",At="[object ArrayBuffer]",et="[object DataView]",Ni="[object Float32Array]",Hi="[object Float64Array]",Ji="[object Int8Array]",ji="[object Int16Array]",Ki="[object Int32Array]",Qi="[object Uint8Array]",Yi="[object Uint8ClampedArray]",Zi="[object Uint16Array]",Xi="[object Uint32Array]",sl=/\b__p \+= '';/g,ol=/\b(__p \+=) '' \+/g,ll=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ha=/&(?:amp|lt|gt|quot|#39);/g,pa=/[&<>"']/g,cl=RegExp(ha.source),ul=RegExp(pa.source),dl=/<%-([\s\S]+?)%>/g,fl=/<%([\s\S]+?)%>/g,va=/<%=([\s\S]+?)%>/g,gl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ml=/^\w*$/,hl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vi=/[\\^$.*+?()[\]{}|]/g,pl=RegExp(Vi.source),$i=/^\s+/,vl=/\s/,_l=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,bl=/\{\n\/\* \[wrapped with (.+)\] \*/,yl=/,? & /,wl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,xl=/[()=,{}\[\]\/\s]/,kl=/\\(\\)?/g,Tl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_a=/\w*$/,Al=/^[-+]0x[0-9a-f]+$/i,Il=/^0b[01]+$/i,Cl=/^\[object .+?Constructor\]$/,El=/^0o[0-7]+$/i,Ml=/^(?:0|[1-9]\d*)$/,Sl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jt=/($^)/,zl=/['\n\r\u2028\u2029\\]/g,Kt="\\ud800-\\udfff",Rl="\\u0300-\\u036f",Ll="\\ufe20-\\ufe2f",ql="\\u20d0-\\u20ff",ba=Rl+Ll+ql,ya="\\u2700-\\u27bf",wa="a-z\\xdf-\\xf6\\xf8-\\xff",Ol="\\xac\\xb1\\xd7\\xf7",Bl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pl="\\u2000-\\u206f",Wl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xa="A-Z\\xc0-\\xd6\\xd8-\\xde",ka="\\ufe0e\\ufe0f",Ta=Ol+Bl+Pl+Wl,er="['’]",Fl="["+Kt+"]",Aa="["+Ta+"]",Qt="["+ba+"]",Ia="\\d+",Ul="["+ya+"]",Ca="["+wa+"]",Ea="[^"+Kt+Ta+Ia+ya+wa+xa+"]",nr="\\ud83c[\\udffb-\\udfff]",Gl="(?:"+Qt+"|"+nr+")",Ma="[^"+Kt+"]",tr="(?:\\ud83c[\\udde6-\\uddff]){2}",ir="[\\ud800-\\udbff][\\udc00-\\udfff]",nt="["+xa+"]",Sa="\\u200d",za="(?:"+Ca+"|"+Ea+")",Dl="(?:"+nt+"|"+Ea+")",Ra="(?:"+er+"(?:d|ll|m|re|s|t|ve))?",La="(?:"+er+"(?:D|LL|M|RE|S|T|VE))?",qa=Gl+"?",Oa="["+ka+"]?",Nl="(?:"+Sa+"(?:"+[Ma,tr,ir].join("|")+")"+Oa+qa+")*",Hl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Jl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ba=Oa+qa+Nl,jl="(?:"+[Ul,tr,ir].join("|")+")"+Ba,Kl="(?:"+[Ma+Qt+"?",Qt,tr,ir,Fl].join("|")+")",Ql=RegExp(er,"g"),Yl=RegExp(Qt,"g"),rr=RegExp(nr+"(?="+nr+")|"+Kl+Ba,"g"),Zl=RegExp([nt+"?"+Ca+"+"+Ra+"(?="+[Aa,nt,"$"].join("|")+")",Dl+"+"+La+"(?="+[Aa,nt+za,"$"].join("|")+")",nt+"?"+za+"+"+Ra,nt+"+"+La,Jl,Hl,Ia,jl].join("|"),"g"),Xl=RegExp("["+Sa+Kt+ba+ka+"]"),Vl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$l=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ec=-1,Q={};Q[Ni]=Q[Hi]=Q[Ji]=Q[ji]=Q[Ki]=Q[Qi]=Q[Yi]=Q[Zi]=Q[Xi]=!0,Q[pn]=Q[Fn]=Q[At]=Q[L]=Q[et]=Q[N]=Q[dn]=Q[$n]=Q[Pe]=Q[wt]=Q[vn]=Q[xt]=Q[rn]=Q[kt]=Q[Tt]=!1;var K={};K[pn]=K[Fn]=K[At]=K[et]=K[L]=K[N]=K[Ni]=K[Hi]=K[Ji]=K[ji]=K[Ki]=K[Pe]=K[wt]=K[vn]=K[xt]=K[rn]=K[kt]=K[Jt]=K[Qi]=K[Yi]=K[Zi]=K[Xi]=!0,K[dn]=K[$n]=K[Tt]=!1;var nc={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},tc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ic={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},rc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ac=parseFloat,sc=parseInt,Pa=typeof Gt=="object"&&Gt&&Gt.Object===Object&&Gt,oc=typeof self=="object"&&self&&self.Object===Object&&self,me=Pa||oc||Function("return this")(),ar=D&&!D.nodeType&&D,Un=ar&&!0&&pe&&!pe.nodeType&&pe,Wa=Un&&Un.exports===ar,sr=Wa&&Pa.process,Ke=function(){try{var u=Un&&Un.require&&Un.require("util").types;return u||sr&&sr.binding&&sr.binding("util")}catch{}}(),Fa=Ke&&Ke.isArrayBuffer,Ua=Ke&&Ke.isDate,Ga=Ke&&Ke.isMap,Da=Ke&&Ke.isRegExp,Na=Ke&&Ke.isSet,Ha=Ke&&Ke.isTypedArray;function We(u,m,f){switch(f.length){case 0:return u.call(m);case 1:return u.call(m,f[0]);case 2:return u.call(m,f[0],f[1]);case 3:return u.call(m,f[0],f[1],f[2])}return u.apply(m,f)}function lc(u,m,f,y){for(var M=-1,G=u==null?0:u.length;++M<G;){var ae=u[M];m(y,ae,f(ae),u)}return y}function Qe(u,m){for(var f=-1,y=u==null?0:u.length;++f<y&&m(u[f],f,u)!==!1;);return u}function cc(u,m){for(var f=u==null?0:u.length;f--&&m(u[f],f,u)!==!1;);return u}function Ja(u,m){for(var f=-1,y=u==null?0:u.length;++f<y;)if(!m(u[f],f,u))return!1;return!0}function Mn(u,m){for(var f=-1,y=u==null?0:u.length,M=0,G=[];++f<y;){var ae=u[f];m(ae,f,u)&&(G[M++]=ae)}return G}function Yt(u,m){var f=u==null?0:u.length;return!!f&&tt(u,m,0)>-1}function or(u,m,f){for(var y=-1,M=u==null?0:u.length;++y<M;)if(f(m,u[y]))return!0;return!1}function Z(u,m){for(var f=-1,y=u==null?0:u.length,M=Array(y);++f<y;)M[f]=m(u[f],f,u);return M}function Sn(u,m){for(var f=-1,y=m.length,M=u.length;++f<y;)u[M+f]=m[f];return u}function lr(u,m,f,y){var M=-1,G=u==null?0:u.length;for(y&&G&&(f=u[++M]);++M<G;)f=m(f,u[M],M,u);return f}function uc(u,m,f,y){var M=u==null?0:u.length;for(y&&M&&(f=u[--M]);M--;)f=m(f,u[M],M,u);return f}function cr(u,m){for(var f=-1,y=u==null?0:u.length;++f<y;)if(m(u[f],f,u))return!0;return!1}var dc=ur("length");function fc(u){return u.split("")}function gc(u){return u.match(wl)||[]}function ja(u,m,f){var y;return f(u,function(M,G,ae){if(m(M,G,ae))return y=G,!1}),y}function Zt(u,m,f,y){for(var M=u.length,G=f+(y?1:-1);y?G--:++G<M;)if(m(u[G],G,u))return G;return-1}function tt(u,m,f){return m===m?Ac(u,m,f):Zt(u,Ka,f)}function mc(u,m,f,y){for(var M=f-1,G=u.length;++M<G;)if(y(u[M],m))return M;return-1}function Ka(u){return u!==u}function Qa(u,m){var f=u==null?0:u.length;return f?fr(u,m)/f:Vn}function ur(u){return function(m){return m==null?o:m[u]}}function dr(u){return function(m){return u==null?o:u[m]}}function Ya(u,m,f,y,M){return M(u,function(G,ae,j){f=y?(y=!1,G):m(f,G,ae,j)}),f}function hc(u,m){var f=u.length;for(u.sort(m);f--;)u[f]=u[f].value;return u}function fr(u,m){for(var f,y=-1,M=u.length;++y<M;){var G=m(u[y]);G!==o&&(f=f===o?G:f+G)}return f}function gr(u,m){for(var f=-1,y=Array(u);++f<u;)y[f]=m(f);return y}function pc(u,m){return Z(m,function(f){return[f,u[f]]})}function Za(u){return u&&u.slice(0,es(u)+1).replace($i,"")}function Fe(u){return function(m){return u(m)}}function mr(u,m){return Z(m,function(f){return u[f]})}function It(u,m){return u.has(m)}function Xa(u,m){for(var f=-1,y=u.length;++f<y&&tt(m,u[f],0)>-1;);return f}function Va(u,m){for(var f=u.length;f--&&tt(m,u[f],0)>-1;);return f}function vc(u,m){for(var f=u.length,y=0;f--;)u[f]===m&&++y;return y}var _c=dr(nc),bc=dr(tc);function yc(u){return"\\"+rc[u]}function wc(u,m){return u==null?o:u[m]}function it(u){return Xl.test(u)}function xc(u){return Vl.test(u)}function kc(u){for(var m,f=[];!(m=u.next()).done;)f.push(m.value);return f}function hr(u){var m=-1,f=Array(u.size);return u.forEach(function(y,M){f[++m]=[M,y]}),f}function $a(u,m){return function(f){return u(m(f))}}function zn(u,m){for(var f=-1,y=u.length,M=0,G=[];++f<y;){var ae=u[f];(ae===m||ae===Ee)&&(u[f]=Ee,G[M++]=f)}return G}function Xt(u){var m=-1,f=Array(u.size);return u.forEach(function(y){f[++m]=y}),f}function Tc(u){var m=-1,f=Array(u.size);return u.forEach(function(y){f[++m]=[y,y]}),f}function Ac(u,m,f){for(var y=f-1,M=u.length;++y<M;)if(u[y]===m)return y;return-1}function Ic(u,m,f){for(var y=f+1;y--;)if(u[y]===m)return y;return y}function rt(u){return it(u)?Ec(u):dc(u)}function an(u){return it(u)?Mc(u):fc(u)}function es(u){for(var m=u.length;m--&&vl.test(u.charAt(m)););return m}var Cc=dr(ic);function Ec(u){for(var m=rr.lastIndex=0;rr.test(u);)++m;return m}function Mc(u){return u.match(rr)||[]}function Sc(u){return u.match(Zl)||[]}var zc=function u(m){m=m==null?me:at.defaults(me.Object(),m,at.pick(me,$l));var f=m.Array,y=m.Date,M=m.Error,G=m.Function,ae=m.Math,j=m.Object,pr=m.RegExp,Rc=m.String,Ye=m.TypeError,Vt=f.prototype,Lc=G.prototype,st=j.prototype,$t=m["__core-js_shared__"],ei=Lc.toString,J=st.hasOwnProperty,qc=0,ns=function(){var e=/[^.]+$/.exec($t&&$t.keys&&$t.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ni=st.toString,Oc=ei.call(j),Bc=me._,Pc=pr("^"+ei.call(J).replace(Vi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ti=Wa?m.Buffer:o,Rn=m.Symbol,ii=m.Uint8Array,ts=ti?ti.allocUnsafe:o,ri=$a(j.getPrototypeOf,j),is=j.create,rs=st.propertyIsEnumerable,ai=Vt.splice,as=Rn?Rn.isConcatSpreadable:o,Ct=Rn?Rn.iterator:o,Gn=Rn?Rn.toStringTag:o,si=function(){try{var e=jn(j,"defineProperty");return e({},"",{}),e}catch{}}(),Wc=m.clearTimeout!==me.clearTimeout&&m.clearTimeout,Fc=y&&y.now!==me.Date.now&&y.now,Uc=m.setTimeout!==me.setTimeout&&m.setTimeout,oi=ae.ceil,li=ae.floor,vr=j.getOwnPropertySymbols,Gc=ti?ti.isBuffer:o,ss=m.isFinite,Dc=Vt.join,Nc=$a(j.keys,j),se=ae.max,be=ae.min,Hc=y.now,Jc=m.parseInt,os=ae.random,jc=Vt.reverse,_r=jn(m,"DataView"),Et=jn(m,"Map"),br=jn(m,"Promise"),ot=jn(m,"Set"),Mt=jn(m,"WeakMap"),St=jn(j,"create"),ci=Mt&&new Mt,lt={},Kc=Kn(_r),Qc=Kn(Et),Yc=Kn(br),Zc=Kn(ot),Xc=Kn(Mt),ui=Rn?Rn.prototype:o,zt=ui?ui.valueOf:o,ls=ui?ui.toString:o;function a(e){if(ee(e)&&!S(e)&&!(e instanceof F)){if(e instanceof Ze)return e;if(J.call(e,"__wrapped__"))return co(e)}return new Ze(e)}var ct=function(){function e(){}return function(n){if(!V(n))return{};if(is)return is(n);e.prototype=n;var t=new e;return e.prototype=o,t}}();function di(){}function Ze(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=o}a.templateSettings={escape:dl,evaluate:fl,interpolate:va,variable:"",imports:{_:a}},a.prototype=di.prototype,a.prototype.constructor=a,Ze.prototype=ct(di.prototype),Ze.prototype.constructor=Ze;function F(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function Vc(){var e=new F(this.__wrapped__);return e.__actions__=ze(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ze(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ze(this.__views__),e}function $c(){if(this.__filtered__){var e=new F(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function eu(){var e=this.__wrapped__.value(),n=this.__dir__,t=S(e),i=n<0,r=t?e.length:0,s=fd(0,r,this.__views__),l=s.start,c=s.end,d=c-l,h=i?c:l-1,p=this.__iteratees__,v=p.length,b=0,x=be(d,this.__takeCount__);if(!t||!i&&r==d&&x==d)return Rs(e,this.__actions__);var A=[];e:for(;d--&&b<x;){h+=n;for(var q=-1,I=e[h];++q<v;){var W=p[q],U=W.iteratee,De=W.type,Ae=U(I);if(De==yt)I=Ae;else if(!Ae){if(De==Xn)continue e;break e}}A[b++]=I}return A}F.prototype=ct(di.prototype),F.prototype.constructor=F;function Dn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function nu(){this.__data__=St?St(null):{},this.size=0}function tu(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function iu(e){var n=this.__data__;if(St){var t=n[e];return t===E?o:t}return J.call(n,e)?n[e]:o}function ru(e){var n=this.__data__;return St?n[e]!==o:J.call(n,e)}function au(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=St&&n===o?E:n,this}Dn.prototype.clear=nu,Dn.prototype.delete=tu,Dn.prototype.get=iu,Dn.prototype.has=ru,Dn.prototype.set=au;function _n(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function su(){this.__data__=[],this.size=0}function ou(e){var n=this.__data__,t=fi(n,e);if(t<0)return!1;var i=n.length-1;return t==i?n.pop():ai.call(n,t,1),--this.size,!0}function lu(e){var n=this.__data__,t=fi(n,e);return t<0?o:n[t][1]}function cu(e){return fi(this.__data__,e)>-1}function uu(e,n){var t=this.__data__,i=fi(t,e);return i<0?(++this.size,t.push([e,n])):t[i][1]=n,this}_n.prototype.clear=su,_n.prototype.delete=ou,_n.prototype.get=lu,_n.prototype.has=cu,_n.prototype.set=uu;function bn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function du(){this.size=0,this.__data__={hash:new Dn,map:new(Et||_n),string:new Dn}}function fu(e){var n=Ti(this,e).delete(e);return this.size-=n?1:0,n}function gu(e){return Ti(this,e).get(e)}function mu(e){return Ti(this,e).has(e)}function hu(e,n){var t=Ti(this,e),i=t.size;return t.set(e,n),this.size+=t.size==i?0:1,this}bn.prototype.clear=du,bn.prototype.delete=fu,bn.prototype.get=gu,bn.prototype.has=mu,bn.prototype.set=hu;function Nn(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new bn;++n<t;)this.add(e[n])}function pu(e){return this.__data__.set(e,E),this}function vu(e){return this.__data__.has(e)}Nn.prototype.add=Nn.prototype.push=pu,Nn.prototype.has=vu;function sn(e){var n=this.__data__=new _n(e);this.size=n.size}function _u(){this.__data__=new _n,this.size=0}function bu(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function yu(e){return this.__data__.get(e)}function wu(e){return this.__data__.has(e)}function xu(e,n){var t=this.__data__;if(t instanceof _n){var i=t.__data__;if(!Et||i.length<Ce-1)return i.push([e,n]),this.size=++t.size,this;t=this.__data__=new bn(i)}return t.set(e,n),this.size=t.size,this}sn.prototype.clear=_u,sn.prototype.delete=bu,sn.prototype.get=yu,sn.prototype.has=wu,sn.prototype.set=xu;function cs(e,n){var t=S(e),i=!t&&Qn(e),r=!t&&!i&&Pn(e),s=!t&&!i&&!r&&gt(e),l=t||i||r||s,c=l?gr(e.length,Rc):[],d=c.length;for(var h in e)(n||J.call(e,h))&&!(l&&(h=="length"||r&&(h=="offset"||h=="parent")||s&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||kn(h,d)))&&c.push(h);return c}function us(e){var n=e.length;return n?e[Sr(0,n-1)]:o}function ku(e,n){return Ai(ze(e),Hn(n,0,e.length))}function Tu(e){return Ai(ze(e))}function yr(e,n,t){(t!==o&&!on(e[n],t)||t===o&&!(n in e))&&yn(e,n,t)}function Rt(e,n,t){var i=e[n];(!(J.call(e,n)&&on(i,t))||t===o&&!(n in e))&&yn(e,n,t)}function fi(e,n){for(var t=e.length;t--;)if(on(e[t][0],n))return t;return-1}function Au(e,n,t,i){return Ln(e,function(r,s,l){n(i,r,t(r),l)}),i}function ds(e,n){return e&&gn(n,ce(n),e)}function Iu(e,n){return e&&gn(n,Le(n),e)}function yn(e,n,t){n=="__proto__"&&si?si(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function wr(e,n){for(var t=-1,i=n.length,r=f(i),s=e==null;++t<i;)r[t]=s?o:na(e,n[t]);return r}function Hn(e,n,t){return e===e&&(t!==o&&(e=e<=t?e:t),n!==o&&(e=e>=n?e:n)),e}function Xe(e,n,t,i,r,s){var l,c=n&$,d=n&hn,h=n&Je;if(t&&(l=r?t(e,i,r,s):t(e)),l!==o)return l;if(!V(e))return e;var p=S(e);if(p){if(l=md(e),!c)return ze(e,l)}else{var v=ye(e),b=v==$n||v==Ht;if(Pn(e))return Os(e,c);if(v==vn||v==pn||b&&!r){if(l=d||b?{}:eo(e),!c)return d?id(e,Iu(l,e)):td(e,ds(l,e))}else{if(!K[v])return r?e:{};l=hd(e,v,c)}}s||(s=new sn);var x=s.get(e);if(x)return x;s.set(e,l),So(e)?e.forEach(function(I){l.add(Xe(I,n,t,I,e,s))}):Eo(e)&&e.forEach(function(I,W){l.set(W,Xe(I,n,t,W,e,s))});var A=h?d?Gr:Ur:d?Le:ce,q=p?o:A(e);return Qe(q||e,function(I,W){q&&(W=I,I=e[W]),Rt(l,W,Xe(I,n,t,W,e,s))}),l}function Cu(e){var n=ce(e);return function(t){return fs(t,e,n)}}function fs(e,n,t){var i=t.length;if(e==null)return!i;for(e=j(e);i--;){var r=t[i],s=n[r],l=e[r];if(l===o&&!(r in e)||!s(l))return!1}return!0}function gs(e,n,t){if(typeof e!="function")throw new Ye(B);return Ft(function(){e.apply(o,t)},n)}function Lt(e,n,t,i){var r=-1,s=Yt,l=!0,c=e.length,d=[],h=n.length;if(!c)return d;t&&(n=Z(n,Fe(t))),i?(s=or,l=!1):n.length>=Ce&&(s=It,l=!1,n=new Nn(n));e:for(;++r<c;){var p=e[r],v=t==null?p:t(p);if(p=i||p!==0?p:0,l&&v===v){for(var b=h;b--;)if(n[b]===v)continue e;d.push(p)}else s(n,v,i)||d.push(p)}return d}var Ln=Us(fn),ms=Us(kr,!0);function Eu(e,n){var t=!0;return Ln(e,function(i,r,s){return t=!!n(i,r,s),t}),t}function gi(e,n,t){for(var i=-1,r=e.length;++i<r;){var s=e[i],l=n(s);if(l!=null&&(c===o?l===l&&!Ge(l):t(l,c)))var c=l,d=s}return d}function Mu(e,n,t,i){var r=e.length;for(t=R(t),t<0&&(t=-t>r?0:r+t),i=i===o||i>r?r:R(i),i<0&&(i+=r),i=t>i?0:Ro(i);t<i;)e[t++]=n;return e}function hs(e,n){var t=[];return Ln(e,function(i,r,s){n(i,r,s)&&t.push(i)}),t}function he(e,n,t,i,r){var s=-1,l=e.length;for(t||(t=vd),r||(r=[]);++s<l;){var c=e[s];n>0&&t(c)?n>1?he(c,n-1,t,i,r):Sn(r,c):i||(r[r.length]=c)}return r}var xr=Gs(),ps=Gs(!0);function fn(e,n){return e&&xr(e,n,ce)}function kr(e,n){return e&&ps(e,n,ce)}function mi(e,n){return Mn(n,function(t){return Tn(e[t])})}function Jn(e,n){n=On(n,e);for(var t=0,i=n.length;e!=null&&t<i;)e=e[mn(n[t++])];return t&&t==i?e:o}function vs(e,n,t){var i=n(e);return S(e)?i:Sn(i,t(e))}function ke(e){return e==null?e===o?rl:tl:Gn&&Gn in j(e)?dd(e):Td(e)}function Tr(e,n){return e>n}function Su(e,n){return e!=null&&J.call(e,n)}function zu(e,n){return e!=null&&n in j(e)}function Ru(e,n,t){return e>=be(n,t)&&e<se(n,t)}function Ar(e,n,t){for(var i=t?or:Yt,r=e[0].length,s=e.length,l=s,c=f(s),d=1/0,h=[];l--;){var p=e[l];l&&n&&(p=Z(p,Fe(n))),d=be(p.length,d),c[l]=!t&&(n||r>=120&&p.length>=120)?new Nn(l&&p):o}p=e[0];var v=-1,b=c[0];e:for(;++v<r&&h.length<d;){var x=p[v],A=n?n(x):x;if(x=t||x!==0?x:0,!(b?It(b,A):i(h,A,t))){for(l=s;--l;){var q=c[l];if(!(q?It(q,A):i(e[l],A,t)))continue e}b&&b.push(A),h.push(x)}}return h}function Lu(e,n,t,i){return fn(e,function(r,s,l){n(i,t(r),s,l)}),i}function qt(e,n,t){n=On(n,e),e=ro(e,n);var i=e==null?e:e[mn($e(n))];return i==null?o:We(i,e,t)}function _s(e){return ee(e)&&ke(e)==pn}function qu(e){return ee(e)&&ke(e)==At}function Ou(e){return ee(e)&&ke(e)==N}function Ot(e,n,t,i,r){return e===n?!0:e==null||n==null||!ee(e)&&!ee(n)?e!==e&&n!==n:Bu(e,n,t,i,Ot,r)}function Bu(e,n,t,i,r,s){var l=S(e),c=S(n),d=l?Fn:ye(e),h=c?Fn:ye(n);d=d==pn?vn:d,h=h==pn?vn:h;var p=d==vn,v=h==vn,b=d==h;if(b&&Pn(e)){if(!Pn(n))return!1;l=!0,p=!1}if(b&&!p)return s||(s=new sn),l||gt(e)?Xs(e,n,t,i,r,s):cd(e,n,d,t,i,r,s);if(!(t&de)){var x=p&&J.call(e,"__wrapped__"),A=v&&J.call(n,"__wrapped__");if(x||A){var q=x?e.value():e,I=A?n.value():n;return s||(s=new sn),r(q,I,t,i,s)}}return b?(s||(s=new sn),ud(e,n,t,i,r,s)):!1}function Pu(e){return ee(e)&&ye(e)==Pe}function Ir(e,n,t,i){var r=t.length,s=r,l=!i;if(e==null)return!s;for(e=j(e);r--;){var c=t[r];if(l&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++r<s;){c=t[r];var d=c[0],h=e[d],p=c[1];if(l&&c[2]){if(h===o&&!(d in e))return!1}else{var v=new sn;if(i)var b=i(h,p,d,e,n,v);if(!(b===o?Ot(p,h,de|fe,i,v):b))return!1}}return!0}function bs(e){if(!V(e)||bd(e))return!1;var n=Tn(e)?Pc:Cl;return n.test(Kn(e))}function Wu(e){return ee(e)&&ke(e)==xt}function Fu(e){return ee(e)&&ye(e)==rn}function Uu(e){return ee(e)&&zi(e.length)&&!!Q[ke(e)]}function ys(e){return typeof e=="function"?e:e==null?qe:typeof e=="object"?S(e)?ks(e[0],e[1]):xs(e):No(e)}function Cr(e){if(!Wt(e))return Nc(e);var n=[];for(var t in j(e))J.call(e,t)&&t!="constructor"&&n.push(t);return n}function Gu(e){if(!V(e))return kd(e);var n=Wt(e),t=[];for(var i in e)i=="constructor"&&(n||!J.call(e,i))||t.push(i);return t}function Er(e,n){return e<n}function ws(e,n){var t=-1,i=Re(e)?f(e.length):[];return Ln(e,function(r,s,l){i[++t]=n(r,s,l)}),i}function xs(e){var n=Nr(e);return n.length==1&&n[0][2]?to(n[0][0],n[0][1]):function(t){return t===e||Ir(t,e,n)}}function ks(e,n){return Jr(e)&&no(n)?to(mn(e),n):function(t){var i=na(t,e);return i===o&&i===n?ta(t,e):Ot(n,i,de|fe)}}function hi(e,n,t,i,r){e!==n&&xr(n,function(s,l){if(r||(r=new sn),V(s))Du(e,n,l,t,hi,i,r);else{var c=i?i(Kr(e,l),s,l+"",e,n,r):o;c===o&&(c=s),yr(e,l,c)}},Le)}function Du(e,n,t,i,r,s,l){var c=Kr(e,t),d=Kr(n,t),h=l.get(d);if(h){yr(e,t,h);return}var p=s?s(c,d,t+"",e,n,l):o,v=p===o;if(v){var b=S(d),x=!b&&Pn(d),A=!b&&!x&&gt(d);p=d,b||x||A?S(c)?p=c:te(c)?p=ze(c):x?(v=!1,p=Os(d,!0)):A?(v=!1,p=Bs(d,!0)):p=[]:Ut(d)||Qn(d)?(p=c,Qn(c)?p=Lo(c):(!V(c)||Tn(c))&&(p=eo(d))):v=!1}v&&(l.set(d,p),r(p,d,i,s,l),l.delete(d)),yr(e,t,p)}function Ts(e,n){var t=e.length;if(t)return n+=n<0?t:0,kn(n,t)?e[n]:o}function As(e,n,t){n.length?n=Z(n,function(s){return S(s)?function(l){return Jn(l,s.length===1?s[0]:s)}:s}):n=[qe];var i=-1;n=Z(n,Fe(T()));var r=ws(e,function(s,l,c){var d=Z(n,function(h){return h(s)});return{criteria:d,index:++i,value:s}});return hc(r,function(s,l){return nd(s,l,t)})}function Nu(e,n){return Is(e,n,function(t,i){return ta(e,i)})}function Is(e,n,t){for(var i=-1,r=n.length,s={};++i<r;){var l=n[i],c=Jn(e,l);t(c,l)&&Bt(s,On(l,e),c)}return s}function Hu(e){return function(n){return Jn(n,e)}}function Mr(e,n,t,i){var r=i?mc:tt,s=-1,l=n.length,c=e;for(e===n&&(n=ze(n)),t&&(c=Z(e,Fe(t)));++s<l;)for(var d=0,h=n[s],p=t?t(h):h;(d=r(c,p,d,i))>-1;)c!==e&&ai.call(c,d,1),ai.call(e,d,1);return e}function Cs(e,n){for(var t=e?n.length:0,i=t-1;t--;){var r=n[t];if(t==i||r!==s){var s=r;kn(r)?ai.call(e,r,1):Lr(e,r)}}return e}function Sr(e,n){return e+li(os()*(n-e+1))}function Ju(e,n,t,i){for(var r=-1,s=se(oi((n-e)/(t||1)),0),l=f(s);s--;)l[i?s:++r]=e,e+=t;return l}function zr(e,n){var t="";if(!e||n<1||n>un)return t;do n%2&&(t+=e),n=li(n/2),n&&(e+=e);while(n);return t}function O(e,n){return Qr(io(e,n,qe),e+"")}function ju(e){return us(mt(e))}function Ku(e,n){var t=mt(e);return Ai(t,Hn(n,0,t.length))}function Bt(e,n,t,i){if(!V(e))return e;n=On(n,e);for(var r=-1,s=n.length,l=s-1,c=e;c!=null&&++r<s;){var d=mn(n[r]),h=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(r!=l){var p=c[d];h=i?i(p,d,c):o,h===o&&(h=V(p)?p:kn(n[r+1])?[]:{})}Rt(c,d,h),c=c[d]}return e}var Es=ci?function(e,n){return ci.set(e,n),e}:qe,Qu=si?function(e,n){return si(e,"toString",{configurable:!0,enumerable:!1,value:ra(n),writable:!0})}:qe;function Yu(e){return Ai(mt(e))}function Ve(e,n,t){var i=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var s=f(r);++i<r;)s[i]=e[i+n];return s}function Zu(e,n){var t;return Ln(e,function(i,r,s){return t=n(i,r,s),!t}),!!t}function pi(e,n,t){var i=0,r=e==null?i:e.length;if(typeof n=="number"&&n===n&&r<=Nt){for(;i<r;){var s=i+r>>>1,l=e[s];l!==null&&!Ge(l)&&(t?l<=n:l<n)?i=s+1:r=s}return r}return Rr(e,n,qe,t)}function Rr(e,n,t,i){var r=0,s=e==null?0:e.length;if(s===0)return 0;n=t(n);for(var l=n!==n,c=n===null,d=Ge(n),h=n===o;r<s;){var p=li((r+s)/2),v=t(e[p]),b=v!==o,x=v===null,A=v===v,q=Ge(v);if(l)var I=i||A;else h?I=A&&(i||b):c?I=A&&b&&(i||!x):d?I=A&&b&&!x&&(i||!q):x||q?I=!1:I=i?v<=n:v<n;I?r=p+1:s=p}return be(s,Dt)}function Ms(e,n){for(var t=-1,i=e.length,r=0,s=[];++t<i;){var l=e[t],c=n?n(l):l;if(!t||!on(c,d)){var d=c;s[r++]=l===0?0:l}}return s}function Ss(e){return typeof e=="number"?e:Ge(e)?Vn:+e}function Ue(e){if(typeof e=="string")return e;if(S(e))return Z(e,Ue)+"";if(Ge(e))return ls?ls.call(e):"";var n=e+"";return n=="0"&&1/e==-cn?"-0":n}function qn(e,n,t){var i=-1,r=Yt,s=e.length,l=!0,c=[],d=c;if(t)l=!1,r=or;else if(s>=Ce){var h=n?null:od(e);if(h)return Xt(h);l=!1,r=It,d=new Nn}else d=n?[]:c;e:for(;++i<s;){var p=e[i],v=n?n(p):p;if(p=t||p!==0?p:0,l&&v===v){for(var b=d.length;b--;)if(d[b]===v)continue e;n&&d.push(v),c.push(p)}else r(d,v,t)||(d!==c&&d.push(v),c.push(p))}return c}function Lr(e,n){return n=On(n,e),e=ro(e,n),e==null||delete e[mn($e(n))]}function zs(e,n,t,i){return Bt(e,n,t(Jn(e,n)),i)}function vi(e,n,t,i){for(var r=e.length,s=i?r:-1;(i?s--:++s<r)&&n(e[s],s,e););return t?Ve(e,i?0:s,i?s+1:r):Ve(e,i?s+1:0,i?r:s)}function Rs(e,n){var t=e;return t instanceof F&&(t=t.value()),lr(n,function(i,r){return r.func.apply(r.thisArg,Sn([i],r.args))},t)}function qr(e,n,t){var i=e.length;if(i<2)return i?qn(e[0]):[];for(var r=-1,s=f(i);++r<i;)for(var l=e[r],c=-1;++c<i;)c!=r&&(s[r]=Lt(s[r]||l,e[c],n,t));return qn(he(s,1),n,t)}function Ls(e,n,t){for(var i=-1,r=e.length,s=n.length,l={};++i<r;){var c=i<s?n[i]:o;t(l,e[i],c)}return l}function Or(e){return te(e)?e:[]}function Br(e){return typeof e=="function"?e:qe}function On(e,n){return S(e)?e:Jr(e,n)?[e]:lo(H(e))}var Xu=O;function Bn(e,n,t){var i=e.length;return t=t===o?i:t,!n&&t>=i?e:Ve(e,n,t)}var qs=Wc||function(e){return me.clearTimeout(e)};function Os(e,n){if(n)return e.slice();var t=e.length,i=ts?ts(t):new e.constructor(t);return e.copy(i),i}function Pr(e){var n=new e.constructor(e.byteLength);return new ii(n).set(new ii(e)),n}function Vu(e,n){var t=n?Pr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}function $u(e){var n=new e.constructor(e.source,_a.exec(e));return n.lastIndex=e.lastIndex,n}function ed(e){return zt?j(zt.call(e)):{}}function Bs(e,n){var t=n?Pr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function Ps(e,n){if(e!==n){var t=e!==o,i=e===null,r=e===e,s=Ge(e),l=n!==o,c=n===null,d=n===n,h=Ge(n);if(!c&&!h&&!s&&e>n||s&&l&&d&&!c&&!h||i&&l&&d||!t&&d||!r)return 1;if(!i&&!s&&!h&&e<n||h&&t&&r&&!i&&!s||c&&t&&r||!l&&r||!d)return-1}return 0}function nd(e,n,t){for(var i=-1,r=e.criteria,s=n.criteria,l=r.length,c=t.length;++i<l;){var d=Ps(r[i],s[i]);if(d){if(i>=c)return d;var h=t[i];return d*(h=="desc"?-1:1)}}return e.index-n.index}function Ws(e,n,t,i){for(var r=-1,s=e.length,l=t.length,c=-1,d=n.length,h=se(s-l,0),p=f(d+h),v=!i;++c<d;)p[c]=n[c];for(;++r<l;)(v||r<s)&&(p[t[r]]=e[r]);for(;h--;)p[c++]=e[r++];return p}function Fs(e,n,t,i){for(var r=-1,s=e.length,l=-1,c=t.length,d=-1,h=n.length,p=se(s-c,0),v=f(p+h),b=!i;++r<p;)v[r]=e[r];for(var x=r;++d<h;)v[x+d]=n[d];for(;++l<c;)(b||r<s)&&(v[x+t[l]]=e[r++]);return v}function ze(e,n){var t=-1,i=e.length;for(n||(n=f(i));++t<i;)n[t]=e[t];return n}function gn(e,n,t,i){var r=!t;t||(t={});for(var s=-1,l=n.length;++s<l;){var c=n[s],d=i?i(t[c],e[c],c,t,e):o;d===o&&(d=e[c]),r?yn(t,c,d):Rt(t,c,d)}return t}function td(e,n){return gn(e,Hr(e),n)}function id(e,n){return gn(e,Vs(e),n)}function _i(e,n){return function(t,i){var r=S(t)?lc:Au,s=n?n():{};return r(t,e,T(i,2),s)}}function ut(e){return O(function(n,t){var i=-1,r=t.length,s=r>1?t[r-1]:o,l=r>2?t[2]:o;for(s=e.length>3&&typeof s=="function"?(r--,s):o,l&&Te(t[0],t[1],l)&&(s=r<3?o:s,r=1),n=j(n);++i<r;){var c=t[i];c&&e(n,c,i,s)}return n})}function Us(e,n){return function(t,i){if(t==null)return t;if(!Re(t))return e(t,i);for(var r=t.length,s=n?r:-1,l=j(t);(n?s--:++s<r)&&i(l[s],s,l)!==!1;);return t}}function Gs(e){return function(n,t,i){for(var r=-1,s=j(n),l=i(n),c=l.length;c--;){var d=l[e?c:++r];if(t(s[d],d,s)===!1)break}return n}}function rd(e,n,t){var i=n&re,r=Pt(e);function s(){var l=this&&this!==me&&this instanceof s?r:e;return l.apply(i?t:this,arguments)}return s}function Ds(e){return function(n){n=H(n);var t=it(n)?an(n):o,i=t?t[0]:n.charAt(0),r=t?Bn(t,1).join(""):n.slice(1);return i[e]()+r}}function dt(e){return function(n){return lr(Go(Uo(n).replace(Ql,"")),e,"")}}function Pt(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var t=ct(e.prototype),i=e.apply(t,n);return V(i)?i:t}}function ad(e,n,t){var i=Pt(e);function r(){for(var s=arguments.length,l=f(s),c=s,d=ft(r);c--;)l[c]=arguments[c];var h=s<3&&l[0]!==d&&l[s-1]!==d?[]:zn(l,d);if(s-=h.length,s<t)return Ks(e,n,bi,r.placeholder,o,l,h,o,o,t-s);var p=this&&this!==me&&this instanceof r?i:e;return We(p,this,l)}return r}function Ns(e){return function(n,t,i){var r=j(n);if(!Re(n)){var s=T(t,3);n=ce(n),t=function(c){return s(r[c],c,r)}}var l=e(n,t,i);return l>-1?r[s?n[l]:l]:o}}function Hs(e){return xn(function(n){var t=n.length,i=t,r=Ze.prototype.thru;for(e&&n.reverse();i--;){var s=n[i];if(typeof s!="function")throw new Ye(B);if(r&&!l&&ki(s)=="wrapper")var l=new Ze([],!0)}for(i=l?i:t;++i<t;){s=n[i];var c=ki(s),d=c=="wrapper"?Dr(s):o;d&&jr(d[0])&&d[1]==(je|_e|xe|Se)&&!d[4].length&&d[9]==1?l=l[ki(d[0])].apply(l,d[3]):l=s.length==1&&jr(s)?l[c]():l.thru(s)}return function(){var h=arguments,p=h[0];if(l&&h.length==1&&S(p))return l.plant(p).value();for(var v=0,b=t?n[v].apply(this,h):p;++v<t;)b=n[v].call(this,b);return b}})}function bi(e,n,t,i,r,s,l,c,d,h){var p=n&je,v=n&re,b=n&ve,x=n&(_e|Me),A=n&vt,q=b?o:Pt(e);function I(){for(var W=arguments.length,U=f(W),De=W;De--;)U[De]=arguments[De];if(x)var Ae=ft(I),Ne=vc(U,Ae);if(i&&(U=Ws(U,i,r,x)),s&&(U=Fs(U,s,l,x)),W-=Ne,x&&W<h){var ie=zn(U,Ae);return Ks(e,n,bi,I.placeholder,t,U,ie,c,d,h-W)}var ln=v?t:this,In=b?ln[e]:e;return W=U.length,c?U=Ad(U,c):A&&W>1&&U.reverse(),p&&d<W&&(U.length=d),this&&this!==me&&this instanceof I&&(In=q||Pt(In)),In.apply(ln,U)}return I}function Js(e,n){return function(t,i){return Lu(t,e,n(i),{})}}function yi(e,n){return function(t,i){var r;if(t===o&&i===o)return n;if(t!==o&&(r=t),i!==o){if(r===o)return i;typeof t=="string"||typeof i=="string"?(t=Ue(t),i=Ue(i)):(t=Ss(t),i=Ss(i)),r=e(t,i)}return r}}function Wr(e){return xn(function(n){return n=Z(n,Fe(T())),O(function(t){var i=this;return e(n,function(r){return We(r,i,t)})})})}function wi(e,n){n=n===o?" ":Ue(n);var t=n.length;if(t<2)return t?zr(n,e):n;var i=zr(n,oi(e/rt(n)));return it(n)?Bn(an(i),0,e).join(""):i.slice(0,e)}function sd(e,n,t,i){var r=n&re,s=Pt(e);function l(){for(var c=-1,d=arguments.length,h=-1,p=i.length,v=f(p+d),b=this&&this!==me&&this instanceof l?s:e;++h<p;)v[h]=i[h];for(;d--;)v[h++]=arguments[++c];return We(b,r?t:this,v)}return l}function js(e){return function(n,t,i){return i&&typeof i!="number"&&Te(n,t,i)&&(t=i=o),n=An(n),t===o?(t=n,n=0):t=An(t),i=i===o?n<t?1:-1:An(i),Ju(n,t,i,e)}}function xi(e){return function(n,t){return typeof n=="string"&&typeof t=="string"||(n=en(n),t=en(t)),e(n,t)}}function Ks(e,n,t,i,r,s,l,c,d,h){var p=n&_e,v=p?l:o,b=p?o:l,x=p?s:o,A=p?o:s;n|=p?xe:tn,n&=~(p?tn:xe),n&le||(n&=~(re|ve));var q=[e,n,r,x,v,A,b,c,d,h],I=t.apply(o,q);return jr(e)&&ao(I,q),I.placeholder=i,so(I,e,n)}function Fr(e){var n=ae[e];return function(t,i){if(t=en(t),i=i==null?0:be(R(i),292),i&&ss(t)){var r=(H(t)+"e").split("e"),s=n(r[0]+"e"+(+r[1]+i));return r=(H(s)+"e").split("e"),+(r[0]+"e"+(+r[1]-i))}return n(t)}}var od=ot&&1/Xt(new ot([,-0]))[1]==cn?function(e){return new ot(e)}:oa;function Qs(e){return function(n){var t=ye(n);return t==Pe?hr(n):t==rn?Tc(n):pc(n,e(n))}}function wn(e,n,t,i,r,s,l,c){var d=n&ve;if(!d&&typeof e!="function")throw new Ye(B);var h=i?i.length:0;if(h||(n&=~(xe|tn),i=r=o),l=l===o?l:se(R(l),0),c=c===o?c:R(c),h-=r?r.length:0,n&tn){var p=i,v=r;i=r=o}var b=d?o:Dr(e),x=[e,n,t,i,r,p,v,s,l,c];if(b&&xd(x,b),e=x[0],n=x[1],t=x[2],i=x[3],r=x[4],c=x[9]=x[9]===o?d?0:e.length:se(x[9]-h,0),!c&&n&(_e|Me)&&(n&=~(_e|Me)),!n||n==re)var A=rd(e,n,t);else n==_e||n==Me?A=ad(e,n,c):(n==xe||n==(re|xe))&&!r.length?A=sd(e,n,t,i):A=bi.apply(o,x);var q=b?Es:ao;return so(q(A,x),e,n)}function Ys(e,n,t,i){return e===o||on(e,st[t])&&!J.call(i,t)?n:e}function Zs(e,n,t,i,r,s){return V(e)&&V(n)&&(s.set(n,e),hi(e,n,o,Zs,s),s.delete(n)),e}function ld(e){return Ut(e)?o:e}function Xs(e,n,t,i,r,s){var l=t&de,c=e.length,d=n.length;if(c!=d&&!(l&&d>c))return!1;var h=s.get(e),p=s.get(n);if(h&&p)return h==n&&p==e;var v=-1,b=!0,x=t&fe?new Nn:o;for(s.set(e,n),s.set(n,e);++v<c;){var A=e[v],q=n[v];if(i)var I=l?i(q,A,v,n,e,s):i(A,q,v,e,n,s);if(I!==o){if(I)continue;b=!1;break}if(x){if(!cr(n,function(W,U){if(!It(x,U)&&(A===W||r(A,W,t,i,s)))return x.push(U)})){b=!1;break}}else if(!(A===q||r(A,q,t,i,s))){b=!1;break}}return s.delete(e),s.delete(n),b}function cd(e,n,t,i,r,s,l){switch(t){case et:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case At:return!(e.byteLength!=n.byteLength||!s(new ii(e),new ii(n)));case L:case N:case wt:return on(+e,+n);case dn:return e.name==n.name&&e.message==n.message;case xt:case kt:return e==n+"";case Pe:var c=hr;case rn:var d=i&de;if(c||(c=Xt),e.size!=n.size&&!d)return!1;var h=l.get(e);if(h)return h==n;i|=fe,l.set(e,n);var p=Xs(c(e),c(n),i,r,s,l);return l.delete(e),p;case Jt:if(zt)return zt.call(e)==zt.call(n)}return!1}function ud(e,n,t,i,r,s){var l=t&de,c=Ur(e),d=c.length,h=Ur(n),p=h.length;if(d!=p&&!l)return!1;for(var v=d;v--;){var b=c[v];if(!(l?b in n:J.call(n,b)))return!1}var x=s.get(e),A=s.get(n);if(x&&A)return x==n&&A==e;var q=!0;s.set(e,n),s.set(n,e);for(var I=l;++v<d;){b=c[v];var W=e[b],U=n[b];if(i)var De=l?i(U,W,b,n,e,s):i(W,U,b,e,n,s);if(!(De===o?W===U||r(W,U,t,i,s):De)){q=!1;break}I||(I=b=="constructor")}if(q&&!I){var Ae=e.constructor,Ne=n.constructor;Ae!=Ne&&"constructor"in e&&"constructor"in n&&!(typeof Ae=="function"&&Ae instanceof Ae&&typeof Ne=="function"&&Ne instanceof Ne)&&(q=!1)}return s.delete(e),s.delete(n),q}function xn(e){return Qr(io(e,o,go),e+"")}function Ur(e){return vs(e,ce,Hr)}function Gr(e){return vs(e,Le,Vs)}var Dr=ci?function(e){return ci.get(e)}:oa;function ki(e){for(var n=e.name+"",t=lt[n],i=J.call(lt,n)?t.length:0;i--;){var r=t[i],s=r.func;if(s==null||s==e)return r.name}return n}function ft(e){var n=J.call(a,"placeholder")?a:e;return n.placeholder}function T(){var e=a.iteratee||aa;return e=e===aa?ys:e,arguments.length?e(arguments[0],arguments[1]):e}function Ti(e,n){var t=e.__data__;return _d(n)?t[typeof n=="string"?"string":"hash"]:t.map}function Nr(e){for(var n=ce(e),t=n.length;t--;){var i=n[t],r=e[i];n[t]=[i,r,no(r)]}return n}function jn(e,n){var t=wc(e,n);return bs(t)?t:o}function dd(e){var n=J.call(e,Gn),t=e[Gn];try{e[Gn]=o;var i=!0}catch{}var r=ni.call(e);return i&&(n?e[Gn]=t:delete e[Gn]),r}var Hr=vr?function(e){return e==null?[]:(e=j(e),Mn(vr(e),function(n){return rs.call(e,n)}))}:la,Vs=vr?function(e){for(var n=[];e;)Sn(n,Hr(e)),e=ri(e);return n}:la,ye=ke;(_r&&ye(new _r(new ArrayBuffer(1)))!=et||Et&&ye(new Et)!=Pe||br&&ye(br.resolve())!=ma||ot&&ye(new ot)!=rn||Mt&&ye(new Mt)!=Tt)&&(ye=function(e){var n=ke(e),t=n==vn?e.constructor:o,i=t?Kn(t):"";if(i)switch(i){case Kc:return et;case Qc:return Pe;case Yc:return ma;case Zc:return rn;case Xc:return Tt}return n});function fd(e,n,t){for(var i=-1,r=t.length;++i<r;){var s=t[i],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=be(n,e+l);break;case"takeRight":e=se(e,n-l);break}}return{start:e,end:n}}function gd(e){var n=e.match(bl);return n?n[1].split(yl):[]}function $s(e,n,t){n=On(n,e);for(var i=-1,r=n.length,s=!1;++i<r;){var l=mn(n[i]);if(!(s=e!=null&&t(e,l)))break;e=e[l]}return s||++i!=r?s:(r=e==null?0:e.length,!!r&&zi(r)&&kn(l,r)&&(S(e)||Qn(e)))}function md(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&J.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function eo(e){return typeof e.constructor=="function"&&!Wt(e)?ct(ri(e)):{}}function hd(e,n,t){var i=e.constructor;switch(n){case At:return Pr(e);case L:case N:return new i(+e);case et:return Vu(e,t);case Ni:case Hi:case Ji:case ji:case Ki:case Qi:case Yi:case Zi:case Xi:return Bs(e,t);case Pe:return new i;case wt:case kt:return new i(e);case xt:return $u(e);case rn:return new i;case Jt:return ed(e)}}function pd(e,n){var t=n.length;if(!t)return e;var i=t-1;return n[i]=(t>1?"& ":"")+n[i],n=n.join(t>2?", ":" "),e.replace(_l,`{
/* [wrapped with `+n+`] */
`)}function vd(e){return S(e)||Qn(e)||!!(as&&e&&e[as])}function kn(e,n){var t=typeof e;return n=n==null?un:n,!!n&&(t=="number"||t!="symbol"&&Ml.test(e))&&e>-1&&e%1==0&&e<n}function Te(e,n,t){if(!V(t))return!1;var i=typeof n;return(i=="number"?Re(t)&&kn(n,t.length):i=="string"&&n in t)?on(t[n],e):!1}function Jr(e,n){if(S(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Ge(e)?!0:ml.test(e)||!gl.test(e)||n!=null&&e in j(n)}function _d(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function jr(e){var n=ki(e),t=a[n];if(typeof t!="function"||!(n in F.prototype))return!1;if(e===t)return!0;var i=Dr(t);return!!i&&e===i[0]}function bd(e){return!!ns&&ns in e}var yd=$t?Tn:ca;function Wt(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||st;return e===t}function no(e){return e===e&&!V(e)}function to(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==o||e in j(t))}}function wd(e){var n=Mi(e,function(i){return t.size===oe&&t.clear(),i}),t=n.cache;return n}function xd(e,n){var t=e[1],i=n[1],r=t|i,s=r<(re|ve|je),l=i==je&&t==_e||i==je&&t==Se&&e[7].length<=n[8]||i==(je|Se)&&n[7].length<=n[8]&&t==_e;if(!(s||l))return e;i&re&&(e[2]=n[2],r|=t&re?0:le);var c=n[3];if(c){var d=e[3];e[3]=d?Ws(d,c,n[4]):c,e[4]=d?zn(e[3],Ee):n[4]}return c=n[5],c&&(d=e[5],e[5]=d?Fs(d,c,n[6]):c,e[6]=d?zn(e[5],Ee):n[6]),c=n[7],c&&(e[7]=c),i&je&&(e[8]=e[8]==null?n[8]:be(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=r,e}function kd(e){var n=[];if(e!=null)for(var t in j(e))n.push(t);return n}function Td(e){return ni.call(e)}function io(e,n,t){return n=se(n===o?e.length-1:n,0),function(){for(var i=arguments,r=-1,s=se(i.length-n,0),l=f(s);++r<s;)l[r]=i[n+r];r=-1;for(var c=f(n+1);++r<n;)c[r]=i[r];return c[n]=t(l),We(e,this,c)}}function ro(e,n){return n.length<2?e:Jn(e,Ve(n,0,-1))}function Ad(e,n){for(var t=e.length,i=be(n.length,t),r=ze(e);i--;){var s=n[i];e[i]=kn(s,t)?r[s]:o}return e}function Kr(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var ao=oo(Es),Ft=Uc||function(e,n){return me.setTimeout(e,n)},Qr=oo(Qu);function so(e,n,t){var i=n+"";return Qr(e,pd(i,Id(gd(i),t)))}function oo(e){var n=0,t=0;return function(){var i=Hc(),r=bt-(i-t);if(t=i,r>0){if(++n>=Fi)return arguments[0]}else n=0;return e.apply(o,arguments)}}function Ai(e,n){var t=-1,i=e.length,r=i-1;for(n=n===o?i:n;++t<n;){var s=Sr(t,r),l=e[s];e[s]=e[t],e[t]=l}return e.length=n,e}var lo=wd(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(hl,function(t,i,r,s){n.push(r?s.replace(kl,"$1"):i||t)}),n});function mn(e){if(typeof e=="string"||Ge(e))return e;var n=e+"";return n=="0"&&1/e==-cn?"-0":n}function Kn(e){if(e!=null){try{return ei.call(e)}catch{}try{return e+""}catch{}}return""}function Id(e,n){return Qe(Di,function(t){var i="_."+t[0];n&t[1]&&!Yt(e,i)&&e.push(i)}),e.sort()}function co(e){if(e instanceof F)return e.clone();var n=new Ze(e.__wrapped__,e.__chain__);return n.__actions__=ze(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Cd(e,n,t){(t?Te(e,n,t):n===o)?n=1:n=se(R(n),0);var i=e==null?0:e.length;if(!i||n<1)return[];for(var r=0,s=0,l=f(oi(i/n));r<i;)l[s++]=Ve(e,r,r+=n);return l}function Ed(e){for(var n=-1,t=e==null?0:e.length,i=0,r=[];++n<t;){var s=e[n];s&&(r[i++]=s)}return r}function Md(){var e=arguments.length;if(!e)return[];for(var n=f(e-1),t=arguments[0],i=e;i--;)n[i-1]=arguments[i];return Sn(S(t)?ze(t):[t],he(n,1))}var Sd=O(function(e,n){return te(e)?Lt(e,he(n,1,te,!0)):[]}),zd=O(function(e,n){var t=$e(n);return te(t)&&(t=o),te(e)?Lt(e,he(n,1,te,!0),T(t,2)):[]}),Rd=O(function(e,n){var t=$e(n);return te(t)&&(t=o),te(e)?Lt(e,he(n,1,te,!0),o,t):[]});function Ld(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===o?1:R(n),Ve(e,n<0?0:n,i)):[]}function qd(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===o?1:R(n),n=i-n,Ve(e,0,n<0?0:n)):[]}function Od(e,n){return e&&e.length?vi(e,T(n,3),!0,!0):[]}function Bd(e,n){return e&&e.length?vi(e,T(n,3),!0):[]}function Pd(e,n,t,i){var r=e==null?0:e.length;return r?(t&&typeof t!="number"&&Te(e,n,t)&&(t=0,i=r),Mu(e,n,t,i)):[]}function uo(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=t==null?0:R(t);return r<0&&(r=se(i+r,0)),Zt(e,T(n,3),r)}function fo(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=i-1;return t!==o&&(r=R(t),r=t<0?se(i+r,0):be(r,i-1)),Zt(e,T(n,3),r,!0)}function go(e){var n=e==null?0:e.length;return n?he(e,1):[]}function Wd(e){var n=e==null?0:e.length;return n?he(e,cn):[]}function Fd(e,n){var t=e==null?0:e.length;return t?(n=n===o?1:R(n),he(e,n)):[]}function Ud(e){for(var n=-1,t=e==null?0:e.length,i={};++n<t;){var r=e[n];i[r[0]]=r[1]}return i}function mo(e){return e&&e.length?e[0]:o}function Gd(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=t==null?0:R(t);return r<0&&(r=se(i+r,0)),tt(e,n,r)}function Dd(e){var n=e==null?0:e.length;return n?Ve(e,0,-1):[]}var Nd=O(function(e){var n=Z(e,Or);return n.length&&n[0]===e[0]?Ar(n):[]}),Hd=O(function(e){var n=$e(e),t=Z(e,Or);return n===$e(t)?n=o:t.pop(),t.length&&t[0]===e[0]?Ar(t,T(n,2)):[]}),Jd=O(function(e){var n=$e(e),t=Z(e,Or);return n=typeof n=="function"?n:o,n&&t.pop(),t.length&&t[0]===e[0]?Ar(t,o,n):[]});function jd(e,n){return e==null?"":Dc.call(e,n)}function $e(e){var n=e==null?0:e.length;return n?e[n-1]:o}function Kd(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=i;return t!==o&&(r=R(t),r=r<0?se(i+r,0):be(r,i-1)),n===n?Ic(e,n,r):Zt(e,Ka,r,!0)}function Qd(e,n){return e&&e.length?Ts(e,R(n)):o}var Yd=O(ho);function ho(e,n){return e&&e.length&&n&&n.length?Mr(e,n):e}function Zd(e,n,t){return e&&e.length&&n&&n.length?Mr(e,n,T(t,2)):e}function Xd(e,n,t){return e&&e.length&&n&&n.length?Mr(e,n,o,t):e}var Vd=xn(function(e,n){var t=e==null?0:e.length,i=wr(e,n);return Cs(e,Z(n,function(r){return kn(r,t)?+r:r}).sort(Ps)),i});function $d(e,n){var t=[];if(!(e&&e.length))return t;var i=-1,r=[],s=e.length;for(n=T(n,3);++i<s;){var l=e[i];n(l,i,e)&&(t.push(l),r.push(i))}return Cs(e,r),t}function Yr(e){return e==null?e:jc.call(e)}function ef(e,n,t){var i=e==null?0:e.length;return i?(t&&typeof t!="number"&&Te(e,n,t)?(n=0,t=i):(n=n==null?0:R(n),t=t===o?i:R(t)),Ve(e,n,t)):[]}function nf(e,n){return pi(e,n)}function tf(e,n,t){return Rr(e,n,T(t,2))}function rf(e,n){var t=e==null?0:e.length;if(t){var i=pi(e,n);if(i<t&&on(e[i],n))return i}return-1}function af(e,n){return pi(e,n,!0)}function sf(e,n,t){return Rr(e,n,T(t,2),!0)}function of(e,n){var t=e==null?0:e.length;if(t){var i=pi(e,n,!0)-1;if(on(e[i],n))return i}return-1}function lf(e){return e&&e.length?Ms(e):[]}function cf(e,n){return e&&e.length?Ms(e,T(n,2)):[]}function uf(e){var n=e==null?0:e.length;return n?Ve(e,1,n):[]}function df(e,n,t){return e&&e.length?(n=t||n===o?1:R(n),Ve(e,0,n<0?0:n)):[]}function ff(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===o?1:R(n),n=i-n,Ve(e,n<0?0:n,i)):[]}function gf(e,n){return e&&e.length?vi(e,T(n,3),!1,!0):[]}function mf(e,n){return e&&e.length?vi(e,T(n,3)):[]}var hf=O(function(e){return qn(he(e,1,te,!0))}),pf=O(function(e){var n=$e(e);return te(n)&&(n=o),qn(he(e,1,te,!0),T(n,2))}),vf=O(function(e){var n=$e(e);return n=typeof n=="function"?n:o,qn(he(e,1,te,!0),o,n)});function _f(e){return e&&e.length?qn(e):[]}function bf(e,n){return e&&e.length?qn(e,T(n,2)):[]}function yf(e,n){return n=typeof n=="function"?n:o,e&&e.length?qn(e,o,n):[]}function Zr(e){if(!(e&&e.length))return[];var n=0;return e=Mn(e,function(t){if(te(t))return n=se(t.length,n),!0}),gr(n,function(t){return Z(e,ur(t))})}function po(e,n){if(!(e&&e.length))return[];var t=Zr(e);return n==null?t:Z(t,function(i){return We(n,o,i)})}var wf=O(function(e,n){return te(e)?Lt(e,n):[]}),xf=O(function(e){return qr(Mn(e,te))}),kf=O(function(e){var n=$e(e);return te(n)&&(n=o),qr(Mn(e,te),T(n,2))}),Tf=O(function(e){var n=$e(e);return n=typeof n=="function"?n:o,qr(Mn(e,te),o,n)}),Af=O(Zr);function If(e,n){return Ls(e||[],n||[],Rt)}function Cf(e,n){return Ls(e||[],n||[],Bt)}var Ef=O(function(e){var n=e.length,t=n>1?e[n-1]:o;return t=typeof t=="function"?(e.pop(),t):o,po(e,t)});function vo(e){var n=a(e);return n.__chain__=!0,n}function Mf(e,n){return n(e),e}function Ii(e,n){return n(e)}var Sf=xn(function(e){var n=e.length,t=n?e[0]:0,i=this.__wrapped__,r=function(s){return wr(s,e)};return n>1||this.__actions__.length||!(i instanceof F)||!kn(t)?this.thru(r):(i=i.slice(t,+t+(n?1:0)),i.__actions__.push({func:Ii,args:[r],thisArg:o}),new Ze(i,this.__chain__).thru(function(s){return n&&!s.length&&s.push(o),s}))});function zf(){return vo(this)}function Rf(){return new Ze(this.value(),this.__chain__)}function Lf(){this.__values__===o&&(this.__values__=zo(this.value()));var e=this.__index__>=this.__values__.length,n=e?o:this.__values__[this.__index__++];return{done:e,value:n}}function qf(){return this}function Of(e){for(var n,t=this;t instanceof di;){var i=co(t);i.__index__=0,i.__values__=o,n?r.__wrapped__=i:n=i;var r=i;t=t.__wrapped__}return r.__wrapped__=e,n}function Bf(){var e=this.__wrapped__;if(e instanceof F){var n=e;return this.__actions__.length&&(n=new F(this)),n=n.reverse(),n.__actions__.push({func:Ii,args:[Yr],thisArg:o}),new Ze(n,this.__chain__)}return this.thru(Yr)}function Pf(){return Rs(this.__wrapped__,this.__actions__)}var Wf=_i(function(e,n,t){J.call(e,t)?++e[t]:yn(e,t,1)});function Ff(e,n,t){var i=S(e)?Ja:Eu;return t&&Te(e,n,t)&&(n=o),i(e,T(n,3))}function Uf(e,n){var t=S(e)?Mn:hs;return t(e,T(n,3))}var Gf=Ns(uo),Df=Ns(fo);function Nf(e,n){return he(Ci(e,n),1)}function Hf(e,n){return he(Ci(e,n),cn)}function Jf(e,n,t){return t=t===o?1:R(t),he(Ci(e,n),t)}function _o(e,n){var t=S(e)?Qe:Ln;return t(e,T(n,3))}function bo(e,n){var t=S(e)?cc:ms;return t(e,T(n,3))}var jf=_i(function(e,n,t){J.call(e,t)?e[t].push(n):yn(e,t,[n])});function Kf(e,n,t,i){e=Re(e)?e:mt(e),t=t&&!i?R(t):0;var r=e.length;return t<0&&(t=se(r+t,0)),Ri(e)?t<=r&&e.indexOf(n,t)>-1:!!r&&tt(e,n,t)>-1}var Qf=O(function(e,n,t){var i=-1,r=typeof n=="function",s=Re(e)?f(e.length):[];return Ln(e,function(l){s[++i]=r?We(n,l,t):qt(l,n,t)}),s}),Yf=_i(function(e,n,t){yn(e,t,n)});function Ci(e,n){var t=S(e)?Z:ws;return t(e,T(n,3))}function Zf(e,n,t,i){return e==null?[]:(S(n)||(n=n==null?[]:[n]),t=i?o:t,S(t)||(t=t==null?[]:[t]),As(e,n,t))}var Xf=_i(function(e,n,t){e[t?0:1].push(n)},function(){return[[],[]]});function Vf(e,n,t){var i=S(e)?lr:Ya,r=arguments.length<3;return i(e,T(n,4),t,r,Ln)}function $f(e,n,t){var i=S(e)?uc:Ya,r=arguments.length<3;return i(e,T(n,4),t,r,ms)}function eg(e,n){var t=S(e)?Mn:hs;return t(e,Si(T(n,3)))}function ng(e){var n=S(e)?us:ju;return n(e)}function tg(e,n,t){(t?Te(e,n,t):n===o)?n=1:n=R(n);var i=S(e)?ku:Ku;return i(e,n)}function ig(e){var n=S(e)?Tu:Yu;return n(e)}function rg(e){if(e==null)return 0;if(Re(e))return Ri(e)?rt(e):e.length;var n=ye(e);return n==Pe||n==rn?e.size:Cr(e).length}function ag(e,n,t){var i=S(e)?cr:Zu;return t&&Te(e,n,t)&&(n=o),i(e,T(n,3))}var sg=O(function(e,n){if(e==null)return[];var t=n.length;return t>1&&Te(e,n[0],n[1])?n=[]:t>2&&Te(n[0],n[1],n[2])&&(n=[n[0]]),As(e,he(n,1),[])}),Ei=Fc||function(){return me.Date.now()};function og(e,n){if(typeof n!="function")throw new Ye(B);return e=R(e),function(){if(--e<1)return n.apply(this,arguments)}}function yo(e,n,t){return n=t?o:n,n=e&&n==null?e.length:n,wn(e,je,o,o,o,o,n)}function wo(e,n){var t;if(typeof n!="function")throw new Ye(B);return e=R(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=o),t}}var Xr=O(function(e,n,t){var i=re;if(t.length){var r=zn(t,ft(Xr));i|=xe}return wn(e,i,n,t,r)}),xo=O(function(e,n,t){var i=re|ve;if(t.length){var r=zn(t,ft(xo));i|=xe}return wn(n,i,e,t,r)});function ko(e,n,t){n=t?o:n;var i=wn(e,_e,o,o,o,o,o,n);return i.placeholder=ko.placeholder,i}function To(e,n,t){n=t?o:n;var i=wn(e,Me,o,o,o,o,o,n);return i.placeholder=To.placeholder,i}function Ao(e,n,t){var i,r,s,l,c,d,h=0,p=!1,v=!1,b=!0;if(typeof e!="function")throw new Ye(B);n=en(n)||0,V(t)&&(p=!!t.leading,v="maxWait"in t,s=v?se(en(t.maxWait)||0,n):s,b="trailing"in t?!!t.trailing:b);function x(ie){var ln=i,In=r;return i=r=o,h=ie,l=e.apply(In,ln),l}function A(ie){return h=ie,c=Ft(W,n),p?x(ie):l}function q(ie){var ln=ie-d,In=ie-h,Ho=n-ln;return v?be(Ho,s-In):Ho}function I(ie){var ln=ie-d,In=ie-h;return d===o||ln>=n||ln<0||v&&In>=s}function W(){var ie=Ei();if(I(ie))return U(ie);c=Ft(W,q(ie))}function U(ie){return c=o,b&&i?x(ie):(i=r=o,l)}function De(){c!==o&&qs(c),h=0,i=d=r=c=o}function Ae(){return c===o?l:U(Ei())}function Ne(){var ie=Ei(),ln=I(ie);if(i=arguments,r=this,d=ie,ln){if(c===o)return A(d);if(v)return qs(c),c=Ft(W,n),x(d)}return c===o&&(c=Ft(W,n)),l}return Ne.cancel=De,Ne.flush=Ae,Ne}var lg=O(function(e,n){return gs(e,1,n)}),cg=O(function(e,n,t){return gs(e,en(n)||0,t)});function ug(e){return wn(e,vt)}function Mi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ye(B);var t=function(){var i=arguments,r=n?n.apply(this,i):i[0],s=t.cache;if(s.has(r))return s.get(r);var l=e.apply(this,i);return t.cache=s.set(r,l)||s,l};return t.cache=new(Mi.Cache||bn),t}Mi.Cache=bn;function Si(e){if(typeof e!="function")throw new Ye(B);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function dg(e){return wo(2,e)}var fg=Xu(function(e,n){n=n.length==1&&S(n[0])?Z(n[0],Fe(T())):Z(he(n,1),Fe(T()));var t=n.length;return O(function(i){for(var r=-1,s=be(i.length,t);++r<s;)i[r]=n[r].call(this,i[r]);return We(e,this,i)})}),Vr=O(function(e,n){var t=zn(n,ft(Vr));return wn(e,xe,o,n,t)}),Io=O(function(e,n){var t=zn(n,ft(Io));return wn(e,tn,o,n,t)}),gg=xn(function(e,n){return wn(e,Se,o,o,o,n)});function mg(e,n){if(typeof e!="function")throw new Ye(B);return n=n===o?n:R(n),O(e,n)}function hg(e,n){if(typeof e!="function")throw new Ye(B);return n=n==null?0:se(R(n),0),O(function(t){var i=t[n],r=Bn(t,0,n);return i&&Sn(r,i),We(e,this,r)})}function pg(e,n,t){var i=!0,r=!0;if(typeof e!="function")throw new Ye(B);return V(t)&&(i="leading"in t?!!t.leading:i,r="trailing"in t?!!t.trailing:r),Ao(e,n,{leading:i,maxWait:n,trailing:r})}function vg(e){return yo(e,1)}function _g(e,n){return Vr(Br(n),e)}function bg(){if(!arguments.length)return[];var e=arguments[0];return S(e)?e:[e]}function yg(e){return Xe(e,Je)}function wg(e,n){return n=typeof n=="function"?n:o,Xe(e,Je,n)}function xg(e){return Xe(e,$|Je)}function kg(e,n){return n=typeof n=="function"?n:o,Xe(e,$|Je,n)}function Tg(e,n){return n==null||fs(e,n,ce(n))}function on(e,n){return e===n||e!==e&&n!==n}var Ag=xi(Tr),Ig=xi(function(e,n){return e>=n}),Qn=_s(function(){return arguments}())?_s:function(e){return ee(e)&&J.call(e,"callee")&&!rs.call(e,"callee")},S=f.isArray,Cg=Fa?Fe(Fa):qu;function Re(e){return e!=null&&zi(e.length)&&!Tn(e)}function te(e){return ee(e)&&Re(e)}function Eg(e){return e===!0||e===!1||ee(e)&&ke(e)==L}var Pn=Gc||ca,Mg=Ua?Fe(Ua):Ou;function Sg(e){return ee(e)&&e.nodeType===1&&!Ut(e)}function zg(e){if(e==null)return!0;if(Re(e)&&(S(e)||typeof e=="string"||typeof e.splice=="function"||Pn(e)||gt(e)||Qn(e)))return!e.length;var n=ye(e);if(n==Pe||n==rn)return!e.size;if(Wt(e))return!Cr(e).length;for(var t in e)if(J.call(e,t))return!1;return!0}function Rg(e,n){return Ot(e,n)}function Lg(e,n,t){t=typeof t=="function"?t:o;var i=t?t(e,n):o;return i===o?Ot(e,n,o,t):!!i}function $r(e){if(!ee(e))return!1;var n=ke(e);return n==dn||n==Be||typeof e.message=="string"&&typeof e.name=="string"&&!Ut(e)}function qg(e){return typeof e=="number"&&ss(e)}function Tn(e){if(!V(e))return!1;var n=ke(e);return n==$n||n==Ht||n==C||n==il}function Co(e){return typeof e=="number"&&e==R(e)}function zi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=un}function V(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ee(e){return e!=null&&typeof e=="object"}var Eo=Ga?Fe(Ga):Pu;function Og(e,n){return e===n||Ir(e,n,Nr(n))}function Bg(e,n,t){return t=typeof t=="function"?t:o,Ir(e,n,Nr(n),t)}function Pg(e){return Mo(e)&&e!=+e}function Wg(e){if(yd(e))throw new M(nn);return bs(e)}function Fg(e){return e===null}function Ug(e){return e==null}function Mo(e){return typeof e=="number"||ee(e)&&ke(e)==wt}function Ut(e){if(!ee(e)||ke(e)!=vn)return!1;var n=ri(e);if(n===null)return!0;var t=J.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&ei.call(t)==Oc}var ea=Da?Fe(Da):Wu;function Gg(e){return Co(e)&&e>=-un&&e<=un}var So=Na?Fe(Na):Fu;function Ri(e){return typeof e=="string"||!S(e)&&ee(e)&&ke(e)==kt}function Ge(e){return typeof e=="symbol"||ee(e)&&ke(e)==Jt}var gt=Ha?Fe(Ha):Uu;function Dg(e){return e===o}function Ng(e){return ee(e)&&ye(e)==Tt}function Hg(e){return ee(e)&&ke(e)==al}var Jg=xi(Er),jg=xi(function(e,n){return e<=n});function zo(e){if(!e)return[];if(Re(e))return Ri(e)?an(e):ze(e);if(Ct&&e[Ct])return kc(e[Ct]());var n=ye(e),t=n==Pe?hr:n==rn?Xt:mt;return t(e)}function An(e){if(!e)return e===0?e:0;if(e=en(e),e===cn||e===-cn){var n=e<0?-1:1;return n*Gi}return e===e?e:0}function R(e){var n=An(e),t=n%1;return n===n?t?n-t:n:0}function Ro(e){return e?Hn(R(e),0,ge):0}function en(e){if(typeof e=="number")return e;if(Ge(e))return Vn;if(V(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=V(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Za(e);var t=Il.test(e);return t||El.test(e)?sc(e.slice(2),t?2:8):Al.test(e)?Vn:+e}function Lo(e){return gn(e,Le(e))}function Kg(e){return e?Hn(R(e),-un,un):e===0?e:0}function H(e){return e==null?"":Ue(e)}var Qg=ut(function(e,n){if(Wt(n)||Re(n)){gn(n,ce(n),e);return}for(var t in n)J.call(n,t)&&Rt(e,t,n[t])}),qo=ut(function(e,n){gn(n,Le(n),e)}),Li=ut(function(e,n,t,i){gn(n,Le(n),e,i)}),Yg=ut(function(e,n,t,i){gn(n,ce(n),e,i)}),Zg=xn(wr);function Xg(e,n){var t=ct(e);return n==null?t:ds(t,n)}var Vg=O(function(e,n){e=j(e);var t=-1,i=n.length,r=i>2?n[2]:o;for(r&&Te(n[0],n[1],r)&&(i=1);++t<i;)for(var s=n[t],l=Le(s),c=-1,d=l.length;++c<d;){var h=l[c],p=e[h];(p===o||on(p,st[h])&&!J.call(e,h))&&(e[h]=s[h])}return e}),$g=O(function(e){return e.push(o,Zs),We(Oo,o,e)});function em(e,n){return ja(e,T(n,3),fn)}function nm(e,n){return ja(e,T(n,3),kr)}function tm(e,n){return e==null?e:xr(e,T(n,3),Le)}function im(e,n){return e==null?e:ps(e,T(n,3),Le)}function rm(e,n){return e&&fn(e,T(n,3))}function am(e,n){return e&&kr(e,T(n,3))}function sm(e){return e==null?[]:mi(e,ce(e))}function om(e){return e==null?[]:mi(e,Le(e))}function na(e,n,t){var i=e==null?o:Jn(e,n);return i===o?t:i}function lm(e,n){return e!=null&&$s(e,n,Su)}function ta(e,n){return e!=null&&$s(e,n,zu)}var cm=Js(function(e,n,t){n!=null&&typeof n.toString!="function"&&(n=ni.call(n)),e[n]=t},ra(qe)),um=Js(function(e,n,t){n!=null&&typeof n.toString!="function"&&(n=ni.call(n)),J.call(e,n)?e[n].push(t):e[n]=[t]},T),dm=O(qt);function ce(e){return Re(e)?cs(e):Cr(e)}function Le(e){return Re(e)?cs(e,!0):Gu(e)}function fm(e,n){var t={};return n=T(n,3),fn(e,function(i,r,s){yn(t,n(i,r,s),i)}),t}function gm(e,n){var t={};return n=T(n,3),fn(e,function(i,r,s){yn(t,r,n(i,r,s))}),t}var mm=ut(function(e,n,t){hi(e,n,t)}),Oo=ut(function(e,n,t,i){hi(e,n,t,i)}),hm=xn(function(e,n){var t={};if(e==null)return t;var i=!1;n=Z(n,function(s){return s=On(s,e),i||(i=s.length>1),s}),gn(e,Gr(e),t),i&&(t=Xe(t,$|hn|Je,ld));for(var r=n.length;r--;)Lr(t,n[r]);return t});function pm(e,n){return Bo(e,Si(T(n)))}var vm=xn(function(e,n){return e==null?{}:Nu(e,n)});function Bo(e,n){if(e==null)return{};var t=Z(Gr(e),function(i){return[i]});return n=T(n),Is(e,t,function(i,r){return n(i,r[0])})}function _m(e,n,t){n=On(n,e);var i=-1,r=n.length;for(r||(r=1,e=o);++i<r;){var s=e==null?o:e[mn(n[i])];s===o&&(i=r,s=t),e=Tn(s)?s.call(e):s}return e}function bm(e,n,t){return e==null?e:Bt(e,n,t)}function ym(e,n,t,i){return i=typeof i=="function"?i:o,e==null?e:Bt(e,n,t,i)}var Po=Qs(ce),Wo=Qs(Le);function wm(e,n,t){var i=S(e),r=i||Pn(e)||gt(e);if(n=T(n,4),t==null){var s=e&&e.constructor;r?t=i?new s:[]:V(e)?t=Tn(s)?ct(ri(e)):{}:t={}}return(r?Qe:fn)(e,function(l,c,d){return n(t,l,c,d)}),t}function xm(e,n){return e==null?!0:Lr(e,n)}function km(e,n,t){return e==null?e:zs(e,n,Br(t))}function Tm(e,n,t,i){return i=typeof i=="function"?i:o,e==null?e:zs(e,n,Br(t),i)}function mt(e){return e==null?[]:mr(e,ce(e))}function Am(e){return e==null?[]:mr(e,Le(e))}function Im(e,n,t){return t===o&&(t=n,n=o),t!==o&&(t=en(t),t=t===t?t:0),n!==o&&(n=en(n),n=n===n?n:0),Hn(en(e),n,t)}function Cm(e,n,t){return n=An(n),t===o?(t=n,n=0):t=An(t),e=en(e),Ru(e,n,t)}function Em(e,n,t){if(t&&typeof t!="boolean"&&Te(e,n,t)&&(n=t=o),t===o&&(typeof n=="boolean"?(t=n,n=o):typeof e=="boolean"&&(t=e,e=o)),e===o&&n===o?(e=0,n=1):(e=An(e),n===o?(n=e,e=0):n=An(n)),e>n){var i=e;e=n,n=i}if(t||e%1||n%1){var r=os();return be(e+r*(n-e+ac("1e-"+((r+"").length-1))),n)}return Sr(e,n)}var Mm=dt(function(e,n,t){return n=n.toLowerCase(),e+(t?Fo(n):n)});function Fo(e){return ia(H(e).toLowerCase())}function Uo(e){return e=H(e),e&&e.replace(Sl,_c).replace(Yl,"")}function Sm(e,n,t){e=H(e),n=Ue(n);var i=e.length;t=t===o?i:Hn(R(t),0,i);var r=t;return t-=n.length,t>=0&&e.slice(t,r)==n}function zm(e){return e=H(e),e&&ul.test(e)?e.replace(pa,bc):e}function Rm(e){return e=H(e),e&&pl.test(e)?e.replace(Vi,"\\$&"):e}var Lm=dt(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()}),qm=dt(function(e,n,t){return e+(t?" ":"")+n.toLowerCase()}),Om=Ds("toLowerCase");function Bm(e,n,t){e=H(e),n=R(n);var i=n?rt(e):0;if(!n||i>=n)return e;var r=(n-i)/2;return wi(li(r),t)+e+wi(oi(r),t)}function Pm(e,n,t){e=H(e),n=R(n);var i=n?rt(e):0;return n&&i<n?e+wi(n-i,t):e}function Wm(e,n,t){e=H(e),n=R(n);var i=n?rt(e):0;return n&&i<n?wi(n-i,t)+e:e}function Fm(e,n,t){return t||n==null?n=0:n&&(n=+n),Jc(H(e).replace($i,""),n||0)}function Um(e,n,t){return(t?Te(e,n,t):n===o)?n=1:n=R(n),zr(H(e),n)}function Gm(){var e=arguments,n=H(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Dm=dt(function(e,n,t){return e+(t?"_":"")+n.toLowerCase()});function Nm(e,n,t){return t&&typeof t!="number"&&Te(e,n,t)&&(n=t=o),t=t===o?ge:t>>>0,t?(e=H(e),e&&(typeof n=="string"||n!=null&&!ea(n))&&(n=Ue(n),!n&&it(e))?Bn(an(e),0,t):e.split(n,t)):[]}var Hm=dt(function(e,n,t){return e+(t?" ":"")+ia(n)});function Jm(e,n,t){return e=H(e),t=t==null?0:Hn(R(t),0,e.length),n=Ue(n),e.slice(t,t+n.length)==n}function jm(e,n,t){var i=a.templateSettings;t&&Te(e,n,t)&&(n=o),e=H(e),n=Li({},n,i,Ys);var r=Li({},n.imports,i.imports,Ys),s=ce(r),l=mr(r,s),c,d,h=0,p=n.interpolate||jt,v="__p += '",b=pr((n.escape||jt).source+"|"+p.source+"|"+(p===va?Tl:jt).source+"|"+(n.evaluate||jt).source+"|$","g"),x="//# sourceURL="+(J.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ec+"]")+`
`;e.replace(b,function(I,W,U,De,Ae,Ne){return U||(U=De),v+=e.slice(h,Ne).replace(zl,yc),W&&(c=!0,v+=`' +
__e(`+W+`) +
'`),Ae&&(d=!0,v+=`';
`+Ae+`;
__p += '`),U&&(v+=`' +
((__t = (`+U+`)) == null ? '' : __t) +
'`),h=Ne+I.length,I}),v+=`';
`;var A=J.call(n,"variable")&&n.variable;if(!A)v=`with (obj) {
`+v+`
}
`;else if(xl.test(A))throw new M(_);v=(d?v.replace(sl,""):v).replace(ol,"$1").replace(ll,"$1;"),v="function("+(A||"obj")+`) {
`+(A?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(d?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+v+`return __p
}`;var q=Do(function(){return G(s,x+"return "+v).apply(o,l)});if(q.source=v,$r(q))throw q;return q}function Km(e){return H(e).toLowerCase()}function Qm(e){return H(e).toUpperCase()}function Ym(e,n,t){if(e=H(e),e&&(t||n===o))return Za(e);if(!e||!(n=Ue(n)))return e;var i=an(e),r=an(n),s=Xa(i,r),l=Va(i,r)+1;return Bn(i,s,l).join("")}function Zm(e,n,t){if(e=H(e),e&&(t||n===o))return e.slice(0,es(e)+1);if(!e||!(n=Ue(n)))return e;var i=an(e),r=Va(i,an(n))+1;return Bn(i,0,r).join("")}function Xm(e,n,t){if(e=H(e),e&&(t||n===o))return e.replace($i,"");if(!e||!(n=Ue(n)))return e;var i=an(e),r=Xa(i,an(n));return Bn(i,r).join("")}function Vm(e,n){var t=_t,i=En;if(V(n)){var r="separator"in n?n.separator:r;t="length"in n?R(n.length):t,i="omission"in n?Ue(n.omission):i}e=H(e);var s=e.length;if(it(e)){var l=an(e);s=l.length}if(t>=s)return e;var c=t-rt(i);if(c<1)return i;var d=l?Bn(l,0,c).join(""):e.slice(0,c);if(r===o)return d+i;if(l&&(c+=d.length-c),ea(r)){if(e.slice(c).search(r)){var h,p=d;for(r.global||(r=pr(r.source,H(_a.exec(r))+"g")),r.lastIndex=0;h=r.exec(p);)var v=h.index;d=d.slice(0,v===o?c:v)}}else if(e.indexOf(Ue(r),c)!=c){var b=d.lastIndexOf(r);b>-1&&(d=d.slice(0,b))}return d+i}function $m(e){return e=H(e),e&&cl.test(e)?e.replace(ha,Cc):e}var eh=dt(function(e,n,t){return e+(t?" ":"")+n.toUpperCase()}),ia=Ds("toUpperCase");function Go(e,n,t){return e=H(e),n=t?o:n,n===o?xc(e)?Sc(e):gc(e):e.match(n)||[]}var Do=O(function(e,n){try{return We(e,o,n)}catch(t){return $r(t)?t:new M(t)}}),nh=xn(function(e,n){return Qe(n,function(t){t=mn(t),yn(e,t,Xr(e[t],e))}),e});function th(e){var n=e==null?0:e.length,t=T();return e=n?Z(e,function(i){if(typeof i[1]!="function")throw new Ye(B);return[t(i[0]),i[1]]}):[],O(function(i){for(var r=-1;++r<n;){var s=e[r];if(We(s[0],this,i))return We(s[1],this,i)}})}function ih(e){return Cu(Xe(e,$))}function ra(e){return function(){return e}}function rh(e,n){return e==null||e!==e?n:e}var ah=Hs(),sh=Hs(!0);function qe(e){return e}function aa(e){return ys(typeof e=="function"?e:Xe(e,$))}function oh(e){return xs(Xe(e,$))}function lh(e,n){return ks(e,Xe(n,$))}var ch=O(function(e,n){return function(t){return qt(t,e,n)}}),uh=O(function(e,n){return function(t){return qt(e,t,n)}});function sa(e,n,t){var i=ce(n),r=mi(n,i);t==null&&!(V(n)&&(r.length||!i.length))&&(t=n,n=e,e=this,r=mi(n,ce(n)));var s=!(V(t)&&"chain"in t)||!!t.chain,l=Tn(e);return Qe(r,function(c){var d=n[c];e[c]=d,l&&(e.prototype[c]=function(){var h=this.__chain__;if(s||h){var p=e(this.__wrapped__),v=p.__actions__=ze(this.__actions__);return v.push({func:d,args:arguments,thisArg:e}),p.__chain__=h,p}return d.apply(e,Sn([this.value()],arguments))})}),e}function dh(){return me._===this&&(me._=Bc),this}function oa(){}function fh(e){return e=R(e),O(function(n){return Ts(n,e)})}var gh=Wr(Z),mh=Wr(Ja),hh=Wr(cr);function No(e){return Jr(e)?ur(mn(e)):Hu(e)}function ph(e){return function(n){return e==null?o:Jn(e,n)}}var vh=js(),_h=js(!0);function la(){return[]}function ca(){return!1}function bh(){return{}}function yh(){return""}function wh(){return!0}function xh(e,n){if(e=R(e),e<1||e>un)return[];var t=ge,i=be(e,ge);n=T(n),e-=ge;for(var r=gr(i,n);++t<e;)n(t);return r}function kh(e){return S(e)?Z(e,mn):Ge(e)?[e]:ze(lo(H(e)))}function Th(e){var n=++qc;return H(e)+n}var Ah=yi(function(e,n){return e+n},0),Ih=Fr("ceil"),Ch=yi(function(e,n){return e/n},1),Eh=Fr("floor");function Mh(e){return e&&e.length?gi(e,qe,Tr):o}function Sh(e,n){return e&&e.length?gi(e,T(n,2),Tr):o}function zh(e){return Qa(e,qe)}function Rh(e,n){return Qa(e,T(n,2))}function Lh(e){return e&&e.length?gi(e,qe,Er):o}function qh(e,n){return e&&e.length?gi(e,T(n,2),Er):o}var Oh=yi(function(e,n){return e*n},1),Bh=Fr("round"),Ph=yi(function(e,n){return e-n},0);function Wh(e){return e&&e.length?fr(e,qe):0}function Fh(e,n){return e&&e.length?fr(e,T(n,2)):0}return a.after=og,a.ary=yo,a.assign=Qg,a.assignIn=qo,a.assignInWith=Li,a.assignWith=Yg,a.at=Zg,a.before=wo,a.bind=Xr,a.bindAll=nh,a.bindKey=xo,a.castArray=bg,a.chain=vo,a.chunk=Cd,a.compact=Ed,a.concat=Md,a.cond=th,a.conforms=ih,a.constant=ra,a.countBy=Wf,a.create=Xg,a.curry=ko,a.curryRight=To,a.debounce=Ao,a.defaults=Vg,a.defaultsDeep=$g,a.defer=lg,a.delay=cg,a.difference=Sd,a.differenceBy=zd,a.differenceWith=Rd,a.drop=Ld,a.dropRight=qd,a.dropRightWhile=Od,a.dropWhile=Bd,a.fill=Pd,a.filter=Uf,a.flatMap=Nf,a.flatMapDeep=Hf,a.flatMapDepth=Jf,a.flatten=go,a.flattenDeep=Wd,a.flattenDepth=Fd,a.flip=ug,a.flow=ah,a.flowRight=sh,a.fromPairs=Ud,a.functions=sm,a.functionsIn=om,a.groupBy=jf,a.initial=Dd,a.intersection=Nd,a.intersectionBy=Hd,a.intersectionWith=Jd,a.invert=cm,a.invertBy=um,a.invokeMap=Qf,a.iteratee=aa,a.keyBy=Yf,a.keys=ce,a.keysIn=Le,a.map=Ci,a.mapKeys=fm,a.mapValues=gm,a.matches=oh,a.matchesProperty=lh,a.memoize=Mi,a.merge=mm,a.mergeWith=Oo,a.method=ch,a.methodOf=uh,a.mixin=sa,a.negate=Si,a.nthArg=fh,a.omit=hm,a.omitBy=pm,a.once=dg,a.orderBy=Zf,a.over=gh,a.overArgs=fg,a.overEvery=mh,a.overSome=hh,a.partial=Vr,a.partialRight=Io,a.partition=Xf,a.pick=vm,a.pickBy=Bo,a.property=No,a.propertyOf=ph,a.pull=Yd,a.pullAll=ho,a.pullAllBy=Zd,a.pullAllWith=Xd,a.pullAt=Vd,a.range=vh,a.rangeRight=_h,a.rearg=gg,a.reject=eg,a.remove=$d,a.rest=mg,a.reverse=Yr,a.sampleSize=tg,a.set=bm,a.setWith=ym,a.shuffle=ig,a.slice=ef,a.sortBy=sg,a.sortedUniq=lf,a.sortedUniqBy=cf,a.split=Nm,a.spread=hg,a.tail=uf,a.take=df,a.takeRight=ff,a.takeRightWhile=gf,a.takeWhile=mf,a.tap=Mf,a.throttle=pg,a.thru=Ii,a.toArray=zo,a.toPairs=Po,a.toPairsIn=Wo,a.toPath=kh,a.toPlainObject=Lo,a.transform=wm,a.unary=vg,a.union=hf,a.unionBy=pf,a.unionWith=vf,a.uniq=_f,a.uniqBy=bf,a.uniqWith=yf,a.unset=xm,a.unzip=Zr,a.unzipWith=po,a.update=km,a.updateWith=Tm,a.values=mt,a.valuesIn=Am,a.without=wf,a.words=Go,a.wrap=_g,a.xor=xf,a.xorBy=kf,a.xorWith=Tf,a.zip=Af,a.zipObject=If,a.zipObjectDeep=Cf,a.zipWith=Ef,a.entries=Po,a.entriesIn=Wo,a.extend=qo,a.extendWith=Li,sa(a,a),a.add=Ah,a.attempt=Do,a.camelCase=Mm,a.capitalize=Fo,a.ceil=Ih,a.clamp=Im,a.clone=yg,a.cloneDeep=xg,a.cloneDeepWith=kg,a.cloneWith=wg,a.conformsTo=Tg,a.deburr=Uo,a.defaultTo=rh,a.divide=Ch,a.endsWith=Sm,a.eq=on,a.escape=zm,a.escapeRegExp=Rm,a.every=Ff,a.find=Gf,a.findIndex=uo,a.findKey=em,a.findLast=Df,a.findLastIndex=fo,a.findLastKey=nm,a.floor=Eh,a.forEach=_o,a.forEachRight=bo,a.forIn=tm,a.forInRight=im,a.forOwn=rm,a.forOwnRight=am,a.get=na,a.gt=Ag,a.gte=Ig,a.has=lm,a.hasIn=ta,a.head=mo,a.identity=qe,a.includes=Kf,a.indexOf=Gd,a.inRange=Cm,a.invoke=dm,a.isArguments=Qn,a.isArray=S,a.isArrayBuffer=Cg,a.isArrayLike=Re,a.isArrayLikeObject=te,a.isBoolean=Eg,a.isBuffer=Pn,a.isDate=Mg,a.isElement=Sg,a.isEmpty=zg,a.isEqual=Rg,a.isEqualWith=Lg,a.isError=$r,a.isFinite=qg,a.isFunction=Tn,a.isInteger=Co,a.isLength=zi,a.isMap=Eo,a.isMatch=Og,a.isMatchWith=Bg,a.isNaN=Pg,a.isNative=Wg,a.isNil=Ug,a.isNull=Fg,a.isNumber=Mo,a.isObject=V,a.isObjectLike=ee,a.isPlainObject=Ut,a.isRegExp=ea,a.isSafeInteger=Gg,a.isSet=So,a.isString=Ri,a.isSymbol=Ge,a.isTypedArray=gt,a.isUndefined=Dg,a.isWeakMap=Ng,a.isWeakSet=Hg,a.join=jd,a.kebabCase=Lm,a.last=$e,a.lastIndexOf=Kd,a.lowerCase=qm,a.lowerFirst=Om,a.lt=Jg,a.lte=jg,a.max=Mh,a.maxBy=Sh,a.mean=zh,a.meanBy=Rh,a.min=Lh,a.minBy=qh,a.stubArray=la,a.stubFalse=ca,a.stubObject=bh,a.stubString=yh,a.stubTrue=wh,a.multiply=Oh,a.nth=Qd,a.noConflict=dh,a.noop=oa,a.now=Ei,a.pad=Bm,a.padEnd=Pm,a.padStart=Wm,a.parseInt=Fm,a.random=Em,a.reduce=Vf,a.reduceRight=$f,a.repeat=Um,a.replace=Gm,a.result=_m,a.round=Bh,a.runInContext=u,a.sample=ng,a.size=rg,a.snakeCase=Dm,a.some=ag,a.sortedIndex=nf,a.sortedIndexBy=tf,a.sortedIndexOf=rf,a.sortedLastIndex=af,a.sortedLastIndexBy=sf,a.sortedLastIndexOf=of,a.startCase=Hm,a.startsWith=Jm,a.subtract=Ph,a.sum=Wh,a.sumBy=Fh,a.template=jm,a.times=xh,a.toFinite=An,a.toInteger=R,a.toLength=Ro,a.toLower=Km,a.toNumber=en,a.toSafeInteger=Kg,a.toString=H,a.toUpper=Qm,a.trim=Ym,a.trimEnd=Zm,a.trimStart=Xm,a.truncate=Vm,a.unescape=$m,a.uniqueId=Th,a.upperCase=eh,a.upperFirst=ia,a.each=_o,a.eachRight=bo,a.first=mo,sa(a,function(){var e={};return fn(a,function(n,t){J.call(a.prototype,t)||(e[t]=n)}),e}(),{chain:!1}),a.VERSION=g,Qe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){a[e].placeholder=a}),Qe(["drop","take"],function(e,n){F.prototype[e]=function(t){t=t===o?1:se(R(t),0);var i=this.__filtered__&&!n?new F(this):this.clone();return i.__filtered__?i.__takeCount__=be(t,i.__takeCount__):i.__views__.push({size:be(t,ge),type:e+(i.__dir__<0?"Right":"")}),i},F.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),Qe(["filter","map","takeWhile"],function(e,n){var t=n+1,i=t==Xn||t==Ui;F.prototype[e]=function(r){var s=this.clone();return s.__iteratees__.push({iteratee:T(r,3),type:t}),s.__filtered__=s.__filtered__||i,s}}),Qe(["head","last"],function(e,n){var t="take"+(n?"Right":"");F.prototype[e]=function(){return this[t](1).value()[0]}}),Qe(["initial","tail"],function(e,n){var t="drop"+(n?"":"Right");F.prototype[e]=function(){return this.__filtered__?new F(this):this[t](1)}}),F.prototype.compact=function(){return this.filter(qe)},F.prototype.find=function(e){return this.filter(e).head()},F.prototype.findLast=function(e){return this.reverse().find(e)},F.prototype.invokeMap=O(function(e,n){return typeof e=="function"?new F(this):this.map(function(t){return qt(t,e,n)})}),F.prototype.reject=function(e){return this.filter(Si(T(e)))},F.prototype.slice=function(e,n){e=R(e);var t=this;return t.__filtered__&&(e>0||n<0)?new F(t):(e<0?t=t.takeRight(-e):e&&(t=t.drop(e)),n!==o&&(n=R(n),t=n<0?t.dropRight(-n):t.take(n-e)),t)},F.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},F.prototype.toArray=function(){return this.take(ge)},fn(F.prototype,function(e,n){var t=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),r=a[i?"take"+(n=="last"?"Right":""):n],s=i||/^find/.test(n);r&&(a.prototype[n]=function(){var l=this.__wrapped__,c=i?[1]:arguments,d=l instanceof F,h=c[0],p=d||S(l),v=function(W){var U=r.apply(a,Sn([W],c));return i&&b?U[0]:U};p&&t&&typeof h=="function"&&h.length!=1&&(d=p=!1);var b=this.__chain__,x=!!this.__actions__.length,A=s&&!b,q=d&&!x;if(!s&&p){l=q?l:new F(this);var I=e.apply(l,c);return I.__actions__.push({func:Ii,args:[v],thisArg:o}),new Ze(I,b)}return A&&q?e.apply(this,c):(I=this.thru(v),A?i?I.value()[0]:I.value():I)})}),Qe(["pop","push","shift","sort","splice","unshift"],function(e){var n=Vt[e],t=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);a.prototype[e]=function(){var r=arguments;if(i&&!this.__chain__){var s=this.value();return n.apply(S(s)?s:[],r)}return this[t](function(l){return n.apply(S(l)?l:[],r)})}}),fn(F.prototype,function(e,n){var t=a[n];if(t){var i=t.name+"";J.call(lt,i)||(lt[i]=[]),lt[i].push({name:n,func:t})}}),lt[bi(o,ve).name]=[{name:"wrapper",func:o}],F.prototype.clone=Vc,F.prototype.reverse=$c,F.prototype.value=eu,a.prototype.at=Sf,a.prototype.chain=zf,a.prototype.commit=Rf,a.prototype.next=Lf,a.prototype.plant=Of,a.prototype.reverse=Bf,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Pf,a.prototype.first=a.prototype.head,Ct&&(a.prototype[Ct]=qf),a},at=zc();Un?((Un.exports=at)._=at,ar._=at):me._=at}).call(Gt)})(Wi,Wi.exports);var Pp=Wi.exports;const Wp=Hh(Pp),Fp=Zo({__name:"ModelSelectorComponent",props:{filteredModels:{},currentSlug:{},searchQuery:{}},emits:["select-model"],setup(pe,{expose:D}){D();const o=Vo(),{t:g}=Xo(),Ce=pe,nn=pt(()=>Ce.filteredModels.map(E=>({label:E.name,value:E.slug,icon:B(E),deprecated:!!E.metadata.deprecated_by}))),B=E=>{var oe,Ee,$;return(oe=E.metadata.endpoints)!=null&&oe.includes("embedding")?da:(Ee=E.metadata.endpoints)!=null&&Ee.includes("rank")?fa:($=E.metadata.endpoints)!=null&&$.includes("read")?ga:null},_={$q:o,t:g,props:Ce,modelOptions:nn,getModelIcon:B,get embeddingIcon(){return da},get rerankerIcon(){return fa},get readerIcon(){return ga}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),Up={key:0,class:"text-center q-pa-md text-grey-7"},Gp={key:1,class:"text-center q-pa-md text-grey-7"};function Dp(pe,D,o,g,Ce,nn){return z(),ue("div",null,[g.$q.screen.lt.md?(z(),ue(Cn,{key:0},[Jo(k(pp,{"model-value":o.currentSlug,options:g.modelOptions,"emit-value":"","map-options":"",filled:"",square:"",class:"q-mb-md","option-value":"value","option-label":"label",clearable:!1,"onUpdate:modelValue":D[0]||(D[0]=B=>pe.$emit("select-model",B))},{option:w(({itemProps:B,opt:_,selected:E,toggleOption:oe})=>[k(Zn,jh(Kh(B)),{default:w(()=>[k(Oe,null,{default:w(()=>[k(Pi,{class:Bi(_.deprecated?"text-dim":void 0)},{default:w(()=>[ne(P(_.label),1)]),_:2},1032,["class"])]),_:2},1024),_.icon?(z(),Y(Oe,{key:0,side:""},{default:w(()=>[k(we,{class:"info-icon",name:`img:${_.icon}`},null,8,["name"])]),_:2},1024)):Ie("",!0)]),_:2},1040)]),_:1},8,["model-value","options"]),[[Jh,o.filteredModels.length]]),o.filteredModels.length?Ie("",!0):(z(),ue("div",Up,P(g.t("models.search.no_results",{query:o.searchQuery})),1))],64)):(z(),Y(nl,{key:1,class:"overflow-auto models-list"},{default:w(()=>[o.filteredModels.length?(z(),Y(el,{key:0,name:"list2"},{default:w(()=>[(z(!0),ue(Cn,null,Yn(o.filteredModels,B=>Jo((z(),Y(Zn,{key:B.slug,clickable:"",active:o.currentSlug===B.slug,class:Bi(["card-details",o.currentSlug===B.slug?"text-primary":B.metadata.deprecated_by?"text-dim":void 0]),onClick:_=>pe.$emit("select-model",B.slug)},{default:w(()=>[k(Oe,null,{default:w(()=>[k(Pi,null,{default:w(()=>[ne(P(B.name),1)]),_:2},1024)]),_:2},1024),k(Oe,{side:"",class:"read-more-btn"},{default:w(()=>{var _,E,oe;return[(_=B.metadata.endpoints)!=null&&_.includes("embedding")?(z(),Y(we,{key:0,class:"info-icon",name:"img:"+g.embeddingIcon},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.embeddings")),1)]),_:1})]),_:1},8,["name"])):(E=B.metadata.endpoints)!=null&&E.includes("rank")?(z(),Y(we,{key:1,class:"info-icon",name:"img:"+g.rerankerIcon},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.reranker")),1)]),_:1})]),_:1},8,["name"])):(oe=B.metadata.endpoints)!=null&&oe.includes("read")?(z(),Y(we,{key:2,class:"info-icon",name:"img:"+g.readerIcon},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.reader")),1)]),_:1})]),_:1},8,["name"])):Ie("",!0)]}),_:2},1024)]),_:2},1032,["active","class","onClick"])),[[Qh]])),128))]),_:1})):(z(),ue("div",Gp,P(g.t("models.search.no_results",{query:o.searchQuery})),1))]),_:1}))])}const Np=$o(Fp,[["render",Dp],["__scopeId","data-v-f4a31de5"],["__file","ModelSelectorComponent.vue"]]),Hp=Zo({__name:"ModelsPage",setup(pe,{expose:D}){D();const o=Yh(),g=hp(),{settings:Ce}=jo(o),{featuredBlogs:nn,authors:B,translatedAllBlogs:_,accessedAt:E,lastAccessedAt:oe,initiating:Ee}=jo(g),$=He(""),hn=He(""),Je=He(!1),de=He(null),fe=He(!1),re=He("release_date"),ve=He("desc"),le=He(null),{models:_e}=Bp(),Me=He([]),xe=He(!1),tn=Xh(),je=Vh(),{t:Se}=Xo({useScope:"global"}),vt=Vo(),_t=He(!1),En=He(!0),Fi=pt(()=>En.value),bt=()=>{const C=_e.value.slice();if(!$.value)Me.value=C;else{const L=$.value.toLowerCase().trim();fe.value=!0,Me.value=C.filter(N=>{const Be=N.name.toLowerCase(),dn=N.metadata.tags||[],$n=(N.metadata.model_type||"").toLowerCase(),Ht=(N.metadata.organization||"").toLowerCase();return Be.includes(L)||dn.some(Pe=>Pe.toLowerCase().includes(L))||$n.includes(L)||Ht.includes(L)}),fe.value=!1}Me.value.sort((L,N)=>{let Be=0;switch(re.value){case"name":Be=L.name.localeCompare(N.name);break;case"release_date":Be=new Date(L.metadata.release_date||"0").valueOf()-new Date(N.metadata.release_date||"0").valueOf();break;case"parameter_size":Be=yt(L.metadata.parameter_size||"0")-yt(N.metadata.parameter_size||"0");break}return ve.value==="asc"?Be:-Be})},Xn=Wp.debounce(()=>{bt()},300);Ko(_e,C=>{C&&C.length>0&&!xe.value&&(Me.value=C.slice(),xe.value=!0,qi(()=>{bt()}))},{immediate:!0}),Ko([re,ve],()=>{xe.value&&Me.value.length>0&&qi(()=>{Xn()})},{deep:!0});const yt=C=>{if(!C)return 0;const L=C.toUpperCase(),N=parseFloat(L);return isNaN(N)?0:L.endsWith("B")?N*1e9:L.endsWith("M")?N*1e6:N},Ui=pt(()=>Dt.value.filter(C=>{var L,N;return(N=(L=le.value)==null?void 0:L.metadata.availability)==null?void 0:N.includes(C.key)})),cn=["parameter_size","token_length","image_size","output_dimension"],un=pt(()=>{var C;return(C=le.value)!=null&&C.metadata?cn.filter(L=>le.value.metadata[L]).map(L=>({key:L,value:le.value.metadata[L]})):[]}),Gi=C=>{var L;return C==="en"?Se("tokenizer.english"):C==="zh"?Se("tokenizer.chinese"):C==="multilingual"?Se("embedding.multilingual"):(L=Ce.value.localeOptions.find(N=>N.value===C))==null?void 0:L.label},Vn=C=>{re.value=C,Xn()},ge=pt(()=>{var C;return(C=le.value)==null?void 0:C.metadata.model_name}),Dt=pt(()=>[{type:"license_link",icon:"img:/J.svg",key:"license",link:"/api-dashboard/license-config?login=true"},{type:"api_link",icon:"img:/J.svg",key:"api",link:`/?sui&model=${ge.value}`},{type:"aws_link",icon:`img:${$h}`,key:"aws",link:"https://aws.amazon.com/marketplace/seller-profile?id=seller-stch2ludm6vgy"},{type:"azure_link",icon:`img:${ep}`,key:"azure",link:"https://azuremarketplace.microsoft.com/en-US/marketplace/apps?page=1&search=jina"},{type:"gcp_link",icon:`img:${np}`,key:"gcp",link:"https://console.cloud.google.com/marketplace/browse?q=jina"},{type:"huggingface_link",icon:"img:/huggingface_logo.svg",key:"huggingface",link:`https://huggingface.co/jinaai/${ge.value}`}]),Nt=async C=>{if(!(hn.value===C&&le.value))try{Je.value=!0,de.value=null,hn.value=C;const L=_e.value.find(N=>N.slug===C);if(!L)throw new Error(`Model "${C}" not found`);await qi(),le.value=L,tn.params.slug!==C&&je.push(`/models/${C}`)}catch(L){de.value=L instanceof Error?L.message:"Failed to load model",le.value=null}finally{Je.value=!1}},Di=C=>({"margin-top":`${C}px`});Qo(()=>{const C=tn.params.slug!==void 0;C&&En.value?(_t.value=!0,setTimeout(()=>{En.value=!1,_t.value=!1},500)):!C&&!En.value&&(En.value=!0)});const pn=()=>{let C=Se("model_graph.title"),L=Se("model_graph.description"),N="https://jina.ai/banner-models.png",Be="Jina AI",dn="https://jina.ai/models";le.value&&(C=Se("models.title",{_modelName:ge.value}),L=Se(`embedding.${ge.value.replace(".","")}_description`),N=`https://jina.ai/models-banner/${ge.value}.png`,Be=le.value.metadata.organization,dn=`https://jina.ai/models/${le.value.slug}`),tp({title:C,meta:[{name:"title",content:C},{name:"description",content:L},{name:"author",content:Be},{property:"og:title",content:C},{property:"og:url",content:dn},{property:"og:image",content:N},{property:"og:description",content:L},{property:"twitter:title",content:C},{property:"twitter:url",content:dn},{property:"twitter:image",content:N},{property:"twitter:description",content:L},{property:"twitter:label1",content:"Created by"},{property:"twitter:data1",content:Be}]})};Qo(async()=>{const C=tn.params.slug;C&&await Nt(C),await qi(),pn()}),Yo(()=>{Me.value=_e.value.slice()});const Fn={userStore:o,newsStore:g,settings:Ce,featuredBlogs:nn,authors:B,translatedAllBlogs:_,accessedAt:E,lastAccessedAt:oe,initiating:Ee,searchQuery:$,currentSlug:hn,isLoading:Je,error:de,isSearching:fe,sortOption:re,sortDirection:ve,selectedModel:le,models:_e,filteredModels:Me,isInitialized:xe,route:tn,router:je,t:Se,$q:vt,isTransitioning:_t,shouldShowGraph:En,showModelGraph:Fi,applySearchAndSort:bt,debouncedApplySearchAndSort:Xn,parseParameterSize:yt,availableExternalLinks:Ui,MODEL_DETAIL_KEYS:cn,modelDetails:un,mapLangCodeToLanguageName:Gi,setSortOption:Vn,selectModelName:ge,externalLinks:Dt,selectModel:Nt,getStyle:Di,initHead:pn,get langcode2SingleEmoji(){return up},get ccncOptions(){return Zh},get embeddingIcon(){return da},get rerankerIcon(){return fa},get readerIcon(){return ga},EmbeddingGraph:dp,H2TitleBlock:fp,ResearchersComponent:gp,NewsFilterComponent:mp,ModelSelectorComponent:Np};return Object.defineProperty(Fn,"__isScriptSetup",{enumerable:!1,value:!0}),Fn}}),Jp={key:"graph",class:"q-pa-xl row justify-center overflow-hidden q-mb-xl"},jp={class:"col-12 col-sm-11 col-md-10",style:{"z-index":"1"}},Kp={class:"col-11 col-md-3 col-xl-2 q-pa-md models-sidebar"},Qp={class:"row q-gutter-sm items-center q-mb-md"},Yp={class:"col-10 col-md-8 col-lg-7 col-xl-6 q-pa-md"},Zp={key:0,class:"text-center q-pa-xl"},Xp={class:"text-dim q-mt-sm"},Vp={key:1,class:"text-center q-pa-xl"},$p={class:"text-negative q-mt-sm"},ev={class:"row justify-between"},nv={class:"model-title"},tv={class:"row justify-between items-center"},iv={class:"col q-mr-md"},rv={class:"row items-center"},av={class:"text-caption text-dim q-mr-sm"},sv={class:"row items-center"},ov={class:"text-caption text-dim q-mr-sm"},lv={class:"row items-center"},cv={class:"text-caption text-dim q-mr-sm"},uv={key:0,class:"row items-center"},dv={class:"text-caption text-dim q-mr-sm"},fv={key:1,class:"row items-center"},gv={class:"text-caption text-dim q-mr-sm"},mv={class:"row items-center"},hv={class:"text-caption text-dim q-mr-sm"},pv={class:"col-12 text-caption text-dim q-mr-sm"},vv={class:"text-r-h4 q-mt-xl q-mb-md"},_v={key:3,class:"text-center q-pa-xl q-ma-xl text-dim"};function bv(pe,D,o,g,Ce,nn){const B=sp("q-markdown");return z(),Y(cp,{class:"no-wrap","style-fn":g.getStyle},{default:w(()=>[k(el,{appear:"",mode:"out-in",name:"page-transition"},{default:w(()=>[g.showModelGraph&&!g.isTransitioning?(z(),ue("div",Jp,[X("div",jp,[k(g.H2TitleBlock,{title:"model_graph.title",anchor:"models",subtitle:"model_graph.description"}),k(g.EmbeddingGraph)])])):Ie("",!0),X("div",{key:"catalog",class:Bi(g.$q.screen.lt.md?"column is-vertical row":"row justify-center"),id:"catalog"},[X("div",Kp,[X("div",Qp,[k(ip,{modelValue:g.searchQuery,"onUpdate:modelValue":[D[5]||(D[5]=_=>g.searchQuery=_),g.applySearchAndSort],filled:"",square:"",loading:g.isSearching,placeholder:g.t("models.search.placeholder"),class:"col",clearable:"",debounce:"300"},{prepend:w(()=>[k(we,{name:"search"})]),after:w(()=>[k(op,{icon:"sort",dense:"",stretch:"",flat:"",square:"",label:g.t(`models.sort.${g.sortOption}`),"no-caps":"","no-wrap":""},{default:w(()=>[k(nl,null,{default:w(()=>[k(Pi,{header:""},{default:w(()=>[ne(P(g.t("models.sort.label")),1)]),_:1}),k(Zn,{clickable:"",onClick:D[0]||(D[0]=_=>g.setSortOption("name")),active:g.sortOption==="name"},{default:w(()=>[k(Oe,null,{default:w(()=>[ne(P(g.t("models.sort.name")),1)]),_:1}),g.sortOption==="name"?(z(),Y(Oe,{key:0,side:""},{default:w(()=>[k(we,{name:"check"})]),_:1})):Ie("",!0)]),_:1},8,["active"]),k(Zn,{clickable:"",onClick:D[1]||(D[1]=_=>g.setSortOption("release_date")),active:g.sortOption==="release_date"},{default:w(()=>[k(Oe,null,{default:w(()=>[ne(P(g.t("models.sort.release_date")),1)]),_:1}),g.sortOption==="release_date"?(z(),Y(Oe,{key:0,side:""},{default:w(()=>[k(we,{name:"check"})]),_:1})):Ie("",!0)]),_:1},8,["active"]),k(Zn,{clickable:"",onClick:D[2]||(D[2]=_=>g.setSortOption("parameter_size")),active:g.sortOption==="parameter_size"},{default:w(()=>[k(Oe,null,{default:w(()=>[ne(P(g.t("models.sort.parameter_size")),1)]),_:1}),g.sortOption==="parameter_size"?(z(),Y(Oe,{key:0,side:""},{default:w(()=>[k(we,{name:"check"})]),_:1})):Ie("",!0)]),_:1},8,["active"]),k(rp),k(Pi,{header:""},{default:w(()=>[ne(P(g.t("models.sort.direction.name")),1)]),_:1}),k(Zn,{clickable:"",onClick:D[3]||(D[3]=_=>g.sortDirection="asc"),active:g.sortDirection==="asc"},{default:w(()=>[k(Oe,null,{default:w(()=>[ne(P(g.t("models.sort.direction.asc")),1)]),_:1}),g.sortDirection==="asc"?(z(),Y(Oe,{key:0,side:""},{default:w(()=>[k(we,{name:"check"})]),_:1})):Ie("",!0)]),_:1},8,["active"]),k(Zn,{clickable:"",onClick:D[4]||(D[4]=_=>g.sortDirection="desc"),active:g.sortDirection==="desc"},{default:w(()=>[k(Oe,null,{default:w(()=>[ne(P(g.t("models.sort.direction.desc")),1)]),_:1}),g.sortDirection==="desc"?(z(),Y(Oe,{key:0,side:""},{default:w(()=>[k(we,{name:"check"})]),_:1})):Ie("",!0)]),_:1},8,["active"])]),_:1})]),_:1},8,["label"])]),_:1},8,["modelValue","loading","placeholder"])]),k(g.ModelSelectorComponent,{"filtered-models":g.filteredModels,"current-slug":g.currentSlug,"search-query":g.searchQuery,onSelectModel:g.selectModel},null,8,["filtered-models","current-slug","search-query"])]),X("div",Yp,[g.isLoading?(z(),ue("div",Zp,[k(_p,{color:"primary",size:"40"}),X("div",Xp,P(g.t("models.loading")),1)])):g.error?(z(),ue("div",Vp,[k(we,{name:"error_outline",color:"negative",size:"40px"}),X("div",$p,P(g.error),1),k(Oi,{flat:"",color:"primary",label:g.t("models.back_to_models"),class:"q-mt-md",onClick:D[6]||(D[6]=_=>g.router.push("/models"))},null,8,["label"])])):g.selectedModel?(z(),ue(Cn,{key:2},[g.selectedModel.metadata.deprecated_by?(z(),Y(lp,{key:0,dense:"",class:"bg-warning text-black ellipsis","inline-actions":g.$q.screen.gt.md},{avatar:w(()=>[k(we,{name:"warning"})]),action:w(()=>[(z(!0),ue(Cn,null,Yn(g.selectedModel.metadata.deprecated_by,_=>(z(),Y(Oi,{flat:"","text-color":"black",size:"sm",square:"","no-caps":"",key:_,color:"white",label:_,icon:"link",onClick:E=>g.selectModel(_)},null,8,["label","onClick"]))),128))]),default:w(()=>[ne(" "+P(g.t("models.warnings.deprecated"))+" ",1)]),_:1},8,["inline-actions"])):Ie("",!0),k(ap,{flat:"",square:"",class:"metadata-section bg-mixed-100 q-mb-xl q-pa-md"},{default:w(()=>[k(ua,null,{default:w(()=>{var _,E,oe;return[X("div",ev,[X("div",null,[(_=g.selectedModel.metadata.endpoints)!=null&&_.includes("embedding")?(z(),Y(we,{key:0,class:"info-icon",name:"img:"+g.embeddingIcon},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.embeddings")),1)]),_:1})]),_:1},8,["name"])):(E=g.selectedModel.metadata.endpoints)!=null&&E.includes("rank")?(z(),Y(we,{key:1,class:"info-icon",name:"img:"+g.rerankerIcon},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.reranker")),1)]),_:1})]),_:1},8,["name"])):(oe=g.selectedModel.metadata.endpoints)!=null&&oe.includes("read")?(z(),Y(we,{key:2,class:"info-icon",name:"img:"+g.readerIcon},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.reader")),1)]),_:1})]),_:1},8,["name"])):Ie("",!0),g.ccncOptions.includes(g.selectModelName)?(z(),Y(we,{key:3,class:"info-icon",name:"copyright"},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("landing_page.ccbync")),1)]),_:1})]),_:1})):Ie("",!0)])]),X("h1",nv,P(g.selectModelName),1),X("div",tv,[X("div",iv,P(g.t(`embedding.${g.selectModelName.replace(".","")}_description`)),1),g.selectedModel.metadata.release_blog?(z(),Y(Oi,{key:0,flat:"",label:g.t("models.metadata.release_blog"),square:"",to:g.selectedModel.metadata.release_blog,"icon-right":"arrow_forward",class:"col-auto bg-mixed-200",target:"_blank"},null,8,["label","to"])):Ie("",!0)])]}),_:1}),k(ua,null,{default:w(()=>{var _;return[X("div",rv,[X("div",av,P(g.t("models.metadata.license")),1),k(ht,{icon:g.ccncOptions.includes(g.selectModelName)?"copyright":"license",style:{"border-radius":"0"},size:"sm",class:"bg-mixed-200",color:"transparent",label:g.selectedModel.metadata.license},null,8,["icon","label"])]),X("div",sv,[X("div",ov,P(g.t("models.metadata.release_date")),1),k(ht,{icon:"calendar_month",style:{"border-radius":"0"},size:"sm",class:"bg-mixed-200",color:"transparent",label:g.selectedModel.metadata.release_date},{default:w(()=>[k(Wn,null,{default:w(()=>[ne(P(g.t("models.metadata.release_date")),1)]),_:1})]),_:1},8,["label"])]),X("div",lv,[X("div",cv,P(g.t("models.sections.model_details")),1),(z(!0),ue(Cn,null,Yn(g.modelDetails,E=>(z(),Y(ht,{key:E.key,style:{"border-radius":"0"},size:"sm",class:"bg-mixed-200"},{default:w(()=>[ne(P(g.t(`models.sections.${E.key}`))+": "+P(E.value),1)]),_:2},1024))),128))]),(_=g.selectedModel.metadata.language)!=null&&_.length?(z(),ue("div",uv,[X("div",dv,P(g.t("models.sections.language_support")),1),(z(!0),ue(Cn,null,Yn(g.selectedModel.metadata.language,E=>(z(),Y(ht,{square:"",style:{"border-radius":"0"},size:"sm",key:E,class:"bg-mixed-200"},{default:w(()=>[ne(P(`${g.langcode2SingleEmoji(E)} ${g.mapLangCodeToLanguageName(E)}`),1)]),_:2},1024))),128))])):Ie("",!0),g.selectedModel.metadata.related_models&&g.selectedModel.metadata.related_models.length?(z(),ue("div",fv,[X("div",gv,P(g.t("models.metadata.related_models")),1),(z(!0),ue(Cn,null,Yn(g.selectedModel.metadata.related_models,E=>(z(),Y(ht,{clickable:"",square:"",key:E,class:"bg-mixed-200",size:"sm",style:{"border-radius":"0"},onClick:oe=>g.selectModel(E),icon:"link"},{default:w(()=>[ne(P(E),1)]),_:2},1032,["onClick"]))),128))])):Ie("",!0),X("div",mv,[X("div",hv,P(g.t("models.sections.tags")),1),(z(!0),ue(Cn,null,Yn(g.selectedModel.metadata.tags,E=>(z(),Y(ht,{size:"sm",style:{"border-radius":"0"},key:E,class:"bg-mixed-200"},{default:w(()=>[ne(P(E),1)]),_:2},1024))),128))])]}),_:1}),k(ua,{class:"row q-col-gutter-sm"},{default:w(()=>[X("div",pv,P(g.t("models.sections.using_model")),1),(z(!0),ue(Cn,null,Yn(g.availableExternalLinks,_=>(z(),Y(Oi,{"no-caps":"",flat:"",icon:_.icon,label:g.t(`models.metadata.${_.key}_link`),key:_.key,square:"",class:"ellipsis",href:_.link.startsWith("http")?_.link:void 0,to:_.link.startsWith("http")?void 0:_.link,target:"_blank"},null,8,["icon","label","href","to"]))),128))]),_:1})]),_:1}),k(g.ResearchersComponent,{"model-name":g.selectModelName},null,8,["model-name"]),k(B,{src:g.selectedModel.content,"copy-icon":"content_copy",class:Bi(["gh-content q-mt-xl",{"q-px-md":g.$q.screen.lt.md}]),"no-line-numbers":"","no-heading-anchor-links":""},null,8,["src","class"]),X("div",vv,P(g.t("models.sections.blogs")),1),k(g.NewsFilterComponent,{initiating:g.initiating,"translated-all-blogs":g.translatedAllBlogs,"search-by-title":g.selectModelName,"per-page":5},null,8,["initiating","translated-all-blogs","search-by-title"])],64)):(z(),ue("div",_v,P(g.t("models.select_model")),1))])],2)]),_:1})]),_:1})}const Gv=$o(Hp,[["render",bv],["__file","ModelsPage.vue"]]);export{Gv as default};
