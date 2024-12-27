import{s as Rm,br as Lm,bs as qm,p as Bm,k as Pe,W as Ko,h as Om,i as Ft,j as Pm,u as Wm,ao as Do,ag as Fm,m as Ut,w as No,a_ as Ho,a$ as Um,aT as Gm,aU as Dm,aR as Nm,aq as Hm,ap as Jm,n as jm,V as oa,bl as Km,bm as Qm,bn as Ym,bt as Zm,a1 as Xm,a2 as P,a3 as ne,a4 as A,a5 as C,a7 as xe,ac as Y,ae as Ye,b2 as Vm,ab as Ze,al as le,ad as W,aj as ht,ak as sn,as as $m,be as Jo,a9 as Qn,a8 as Pn,q as qi,af as ep,a6 as la,aa as ca,bj as np,aP as tp,aC as ip}from"./index-CAVnrEMK.js";import{a as jo,b as ua,d as gt}from"./QItemLabel-Bys79Bya.js";import{Q as rp}from"./QBtnDropdown-LZIGEDxW.js";import{Q as ap}from"./QBanner-D0sUZRob.js";import{Q as Gt}from"./QTooltip-BCpDvwoA.js";import{Q as sp}from"./QPage-CtqjWbTQ.js";import{e as op}from"./date-Cobb-hXP.js";import{E as lp}from"./EmbeddingGraph-BTpea7G8.js";import{H as cp}from"./H2TitleBlock-Bl4TRiRH.js";import{R as up}from"./ResearchersComponent-D5uakdXp.js";import{N as dp}from"./NewsFilterComponent-DUxBUJlT.js";import{u as fp}from"./blogs-D8N8L8lX.js";import"./QMenu-9ZU1r7RV.js";import"./position-engine-BNgZBpbu.js";import"./QLinearProgress-PFv1H8qJ.js";import"./embedding-CdkJJEZ5.js";import"./search-BkbtqYeH.js";import"./orderBy-CSgIYGI_.js";import"./QSelect-DcQz0oI1.js";import"./NewsVerticalCard-DJ_UyFiS.js";import"./SXTooltip-Di8Ozm2N.js";const hp='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',gp=Rm({name:"QSpinnerDots",props:Lm,setup(Xe){const{cSize:j,classes:o}=qm(Xe);return()=>Bm("svg",{class:o.value,fill:"currentColor",width:j.value,height:j.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:hp})}}),mp=`---
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
`,pp=`---
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
`,vp=`---
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
`,_p=`---
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
`,bp=`---
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
`,yp=`---
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
`,wp=`---
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
`,xp=`---
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
`,kp=`---
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
`,Tp=`---
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
`,Ap=`---
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
`,Ip=`---
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
`,Cp=`---
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
`,Ep=`---
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
`,Mp=`---
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
`,Sp=`---
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
`,zp=`---
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
`;function Rp(){const Xe=Pe([]),j=(o,g)=>{const[on,In,...V]=o.split("---"),_={};let F=null,Ve=!1,$e=!1,te={};if(In.split(`
`).forEach(We=>{const ce=We.trim();if(!(!ce||ce.startsWith("#"))){if(ce.startsWith("- ")){const ue=ce.substring(2);$e&&F==="metrics"?ue.startsWith("name:")?(Object.keys(te).length>0&&(_.metrics=_.metrics||[]).push(te),te={name:ue.substring(5).trim()}):ue.startsWith("value:")&&(te.value=parseFloat(ue.substring(6).trim())||ue.substring(6).trim()):F&&(Array.isArray(_[F])||(_[F]=[]),_[F].push(ue));return}if(ce.includes(":")){const[ue,...ie]=ce.split(":"),ge=ue.trim(),se=ie.join(":").trim();F=ge,Ve=se==="",$e=ge==="metrics",!Ve&&!$e?_[ge]=se.replace(/^["'](.*)["']$/,"$1"):Ve&&(_[ge]=[])}}}),$e&&Object.keys(te).length>0&&(_.metrics=_.metrics||[]).push(te),!_.model_name||!_.model_version||!_.model_type||!_.organization||!_.license||!_.tags)throw new Error(`Missing required metadata fields in model ${g}`);const gn={model_name:_.model_name,model_version:_.model_version,model_type:_.model_type,organization:_.organization,license:_.license,token_length:_.token_length,image_size:_.image_size,tags:_.tags||[],architecture:_.architecture,parameter_size:_.parameter_size,training_data:_.training_data,input_format:_.input_format,output_dimension:_.output_dimension,language:_.language||[],metrics:_.metrics,quantization:_.quantization,intended_use:_.intended_use,limitations:_.limitations,ethical_considerations:_.ethical_considerations,hardware_requirements:_.hardware_requirements,api_type:_.api_type,api_link:_.api_link,aws:_.aws,release_blog:_.release_blog,deprecated_by:_.deprecated_by,related_models:_.related_models,arxiv:_.arxiv,huggingface:_.huggingface,endpoints:_.endpoints||[],release_date:_.release_date,availability:_.availability||[]};return{slug:g,name:gn.model_name,metadata:gn,content:V.join("---").trim()}};return Ko(async()=>{try{const o=Object.assign({"../content/models/jina-clip-v1.md":mp,"../content/models/jina-clip-v2.md":pp,"../content/models/jina-colbert-v1-en.md":vp,"../content/models/jina-colbert-v2.md":_p,"../content/models/jina-embedding-b-en-v1.md":bp,"../content/models/jina-embeddings-v2-base-code.md":yp,"../content/models/jina-embeddings-v2-base-de.md":wp,"../content/models/jina-embeddings-v2-base-en.md":xp,"../content/models/jina-embeddings-v2-base-es.md":kp,"../content/models/jina-embeddings-v2-base-zh.md":Tp,"../content/models/jina-embeddings-v3.md":Ap,"../content/models/jina-reranker-v1-base-en.md":Ip,"../content/models/jina-reranker-v1-tiny-en.md":Cp,"../content/models/jina-reranker-v1-turbo-en.md":Ep,"../content/models/jina-reranker-v2-base-multilingual.md":Mp,"../content/models/reader-lm-0.5b.md":Sp,"../content/models/reader-lm-1.5b.md":zp});Xe.value=Object.entries(o).map(([g,on])=>{var V;const In=((V=g.split("/").pop())==null?void 0:V.replace(".md",""))||"";return j(on,In)})}catch(o){console.error("Error loading model files:",o),Xe.value=[]}}),{models:Xe}}var Bi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Bi.exports;(function(Xe,j){(function(){var o,g="4.17.21",on=200,In="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",V="Expected a function",_="Invalid `variable` option passed into `_.template`",F="__lodash_hash_undefined__",Ve=500,$e="__lodash_placeholder__",te=1,gn=2,We=4,ce=1,ue=2,ie=1,ge=2,se=4,me=8,ke=16,_e=32,Fe=64,Ue=128,Te=256,mt=512,pt=30,Cn="...",Oi=800,vt=16,Yn=1,_t=2,Pi=3,ln=1/0,cn=9007199254740991,Wi=17976931348623157e292,Zn=NaN,de=4294967295,Dt=de-1,Nt=de>>>1,Fi=[["ary",Ue],["bind",ie],["bindKey",ge],["curry",me],["curryRight",ke],["flip",mt],["partial",_e],["partialRight",Fe],["rearg",Te]],mn="[object Arguments]",Wn="[object Array]",I="[object AsyncFunction]",z="[object Boolean]",G="[object Date]",Me="[object DOMException]",un="[object Error]",Xn="[object Function]",Ht="[object GeneratorFunction]",Se="[object Map]",bt="[object Number]",Qo="[object Null]",pn="[object Object]",da="[object Promise]",Yo="[object Proxy]",yt="[object RegExp]",en="[object Set]",wt="[object String]",Jt="[object Symbol]",Zo="[object Undefined]",xt="[object WeakMap]",Xo="[object WeakSet]",kt="[object ArrayBuffer]",Vn="[object DataView]",Ui="[object Float32Array]",Gi="[object Float64Array]",Di="[object Int8Array]",Ni="[object Int16Array]",Hi="[object Int32Array]",Ji="[object Uint8Array]",ji="[object Uint8ClampedArray]",Ki="[object Uint16Array]",Qi="[object Uint32Array]",Vo=/\b__p \+= '';/g,$o=/\b(__p \+=) '' \+/g,el=/(__e\(.*?\)|\b__t\)) \+\n'';/g,fa=/&(?:amp|lt|gt|quot|#39);/g,ha=/[&<>"']/g,nl=RegExp(fa.source),tl=RegExp(ha.source),il=/<%-([\s\S]+?)%>/g,rl=/<%([\s\S]+?)%>/g,ga=/<%=([\s\S]+?)%>/g,al=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sl=/^\w*$/,ol=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yi=/[\\^$.*+?()[\]{}|]/g,ll=RegExp(Yi.source),Zi=/^\s+/,cl=/\s/,ul=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,dl=/\{\n\/\* \[wrapped with (.+)\] \*/,fl=/,? & /,hl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,gl=/[()=,{}\[\]\/\s]/,ml=/\\(\\)?/g,pl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ma=/\w*$/,vl=/^[-+]0x[0-9a-f]+$/i,_l=/^0b[01]+$/i,bl=/^\[object .+?Constructor\]$/,yl=/^0o[0-7]+$/i,wl=/^(?:0|[1-9]\d*)$/,xl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jt=/($^)/,kl=/['\n\r\u2028\u2029\\]/g,Kt="\\ud800-\\udfff",Tl="\\u0300-\\u036f",Al="\\ufe20-\\ufe2f",Il="\\u20d0-\\u20ff",pa=Tl+Al+Il,va="\\u2700-\\u27bf",_a="a-z\\xdf-\\xf6\\xf8-\\xff",Cl="\\xac\\xb1\\xd7\\xf7",El="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ml="\\u2000-\\u206f",Sl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ba="A-Z\\xc0-\\xd6\\xd8-\\xde",ya="\\ufe0e\\ufe0f",wa=Cl+El+Ml+Sl,Xi="['’]",zl="["+Kt+"]",xa="["+wa+"]",Qt="["+pa+"]",ka="\\d+",Rl="["+va+"]",Ta="["+_a+"]",Aa="[^"+Kt+wa+ka+va+_a+ba+"]",Vi="\\ud83c[\\udffb-\\udfff]",Ll="(?:"+Qt+"|"+Vi+")",Ia="[^"+Kt+"]",$i="(?:\\ud83c[\\udde6-\\uddff]){2}",er="[\\ud800-\\udbff][\\udc00-\\udfff]",$n="["+ba+"]",Ca="\\u200d",Ea="(?:"+Ta+"|"+Aa+")",ql="(?:"+$n+"|"+Aa+")",Ma="(?:"+Xi+"(?:d|ll|m|re|s|t|ve))?",Sa="(?:"+Xi+"(?:D|LL|M|RE|S|T|VE))?",za=Ll+"?",Ra="["+ya+"]?",Bl="(?:"+Ca+"(?:"+[Ia,$i,er].join("|")+")"+Ra+za+")*",Ol="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",La=Ra+za+Bl,Wl="(?:"+[Rl,$i,er].join("|")+")"+La,Fl="(?:"+[Ia+Qt+"?",Qt,$i,er,zl].join("|")+")",Ul=RegExp(Xi,"g"),Gl=RegExp(Qt,"g"),nr=RegExp(Vi+"(?="+Vi+")|"+Fl+La,"g"),Dl=RegExp([$n+"?"+Ta+"+"+Ma+"(?="+[xa,$n,"$"].join("|")+")",ql+"+"+Sa+"(?="+[xa,$n+Ea,"$"].join("|")+")",$n+"?"+Ea+"+"+Ma,$n+"+"+Sa,Pl,Ol,ka,Wl].join("|"),"g"),Nl=RegExp("["+Ca+Kt+pa+ya+"]"),Hl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Jl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jl=-1,K={};K[Ui]=K[Gi]=K[Di]=K[Ni]=K[Hi]=K[Ji]=K[ji]=K[Ki]=K[Qi]=!0,K[mn]=K[Wn]=K[kt]=K[z]=K[Vn]=K[G]=K[un]=K[Xn]=K[Se]=K[bt]=K[pn]=K[yt]=K[en]=K[wt]=K[xt]=!1;var J={};J[mn]=J[Wn]=J[kt]=J[Vn]=J[z]=J[G]=J[Ui]=J[Gi]=J[Di]=J[Ni]=J[Hi]=J[Se]=J[bt]=J[pn]=J[yt]=J[en]=J[wt]=J[Jt]=J[Ji]=J[ji]=J[Ki]=J[Qi]=!0,J[un]=J[Xn]=J[xt]=!1;var Kl={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ql={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Zl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xl=parseFloat,Vl=parseInt,qa=typeof Ft=="object"&&Ft&&Ft.Object===Object&&Ft,$l=typeof self=="object"&&self&&self.Object===Object&&self,fe=qa||$l||Function("return this")(),tr=j&&!j.nodeType&&j,Fn=tr&&!0&&Xe&&!Xe.nodeType&&Xe,Ba=Fn&&Fn.exports===tr,ir=Ba&&qa.process,Ge=function(){try{var u=Fn&&Fn.require&&Fn.require("util").types;return u||ir&&ir.binding&&ir.binding("util")}catch{}}(),Oa=Ge&&Ge.isArrayBuffer,Pa=Ge&&Ge.isDate,Wa=Ge&&Ge.isMap,Fa=Ge&&Ge.isRegExp,Ua=Ge&&Ge.isSet,Ga=Ge&&Ge.isTypedArray;function ze(u,h,f){switch(f.length){case 0:return u.call(h);case 1:return u.call(h,f[0]);case 2:return u.call(h,f[0],f[1]);case 3:return u.call(h,f[0],f[1],f[2])}return u.apply(h,f)}function ec(u,h,f,y){for(var E=-1,U=u==null?0:u.length;++E<U;){var re=u[E];h(y,re,f(re),u)}return y}function De(u,h){for(var f=-1,y=u==null?0:u.length;++f<y&&h(u[f],f,u)!==!1;);return u}function nc(u,h){for(var f=u==null?0:u.length;f--&&h(u[f],f,u)!==!1;);return u}function Da(u,h){for(var f=-1,y=u==null?0:u.length;++f<y;)if(!h(u[f],f,u))return!1;return!0}function En(u,h){for(var f=-1,y=u==null?0:u.length,E=0,U=[];++f<y;){var re=u[f];h(re,f,u)&&(U[E++]=re)}return U}function Yt(u,h){var f=u==null?0:u.length;return!!f&&et(u,h,0)>-1}function rr(u,h,f){for(var y=-1,E=u==null?0:u.length;++y<E;)if(f(h,u[y]))return!0;return!1}function Q(u,h){for(var f=-1,y=u==null?0:u.length,E=Array(y);++f<y;)E[f]=h(u[f],f,u);return E}function Mn(u,h){for(var f=-1,y=h.length,E=u.length;++f<y;)u[E+f]=h[f];return u}function ar(u,h,f,y){var E=-1,U=u==null?0:u.length;for(y&&U&&(f=u[++E]);++E<U;)f=h(f,u[E],E,u);return f}function tc(u,h,f,y){var E=u==null?0:u.length;for(y&&E&&(f=u[--E]);E--;)f=h(f,u[E],E,u);return f}function sr(u,h){for(var f=-1,y=u==null?0:u.length;++f<y;)if(h(u[f],f,u))return!0;return!1}var ic=or("length");function rc(u){return u.split("")}function ac(u){return u.match(hl)||[]}function Na(u,h,f){var y;return f(u,function(E,U,re){if(h(E,U,re))return y=U,!1}),y}function Zt(u,h,f,y){for(var E=u.length,U=f+(y?1:-1);y?U--:++U<E;)if(h(u[U],U,u))return U;return-1}function et(u,h,f){return h===h?vc(u,h,f):Zt(u,Ha,f)}function sc(u,h,f,y){for(var E=f-1,U=u.length;++E<U;)if(y(u[E],h))return E;return-1}function Ha(u){return u!==u}function Ja(u,h){var f=u==null?0:u.length;return f?cr(u,h)/f:Zn}function or(u){return function(h){return h==null?o:h[u]}}function lr(u){return function(h){return u==null?o:u[h]}}function ja(u,h,f,y,E){return E(u,function(U,re,H){f=y?(y=!1,U):h(f,U,re,H)}),f}function oc(u,h){var f=u.length;for(u.sort(h);f--;)u[f]=u[f].value;return u}function cr(u,h){for(var f,y=-1,E=u.length;++y<E;){var U=h(u[y]);U!==o&&(f=f===o?U:f+U)}return f}function ur(u,h){for(var f=-1,y=Array(u);++f<u;)y[f]=h(f);return y}function lc(u,h){return Q(h,function(f){return[f,u[f]]})}function Ka(u){return u&&u.slice(0,Xa(u)+1).replace(Zi,"")}function Re(u){return function(h){return u(h)}}function dr(u,h){return Q(h,function(f){return u[f]})}function Tt(u,h){return u.has(h)}function Qa(u,h){for(var f=-1,y=u.length;++f<y&&et(h,u[f],0)>-1;);return f}function Ya(u,h){for(var f=u.length;f--&&et(h,u[f],0)>-1;);return f}function cc(u,h){for(var f=u.length,y=0;f--;)u[f]===h&&++y;return y}var uc=lr(Kl),dc=lr(Ql);function fc(u){return"\\"+Zl[u]}function hc(u,h){return u==null?o:u[h]}function nt(u){return Nl.test(u)}function gc(u){return Hl.test(u)}function mc(u){for(var h,f=[];!(h=u.next()).done;)f.push(h.value);return f}function fr(u){var h=-1,f=Array(u.size);return u.forEach(function(y,E){f[++h]=[E,y]}),f}function Za(u,h){return function(f){return u(h(f))}}function Sn(u,h){for(var f=-1,y=u.length,E=0,U=[];++f<y;){var re=u[f];(re===h||re===$e)&&(u[f]=$e,U[E++]=f)}return U}function Xt(u){var h=-1,f=Array(u.size);return u.forEach(function(y){f[++h]=y}),f}function pc(u){var h=-1,f=Array(u.size);return u.forEach(function(y){f[++h]=[y,y]}),f}function vc(u,h,f){for(var y=f-1,E=u.length;++y<E;)if(u[y]===h)return y;return-1}function _c(u,h,f){for(var y=f+1;y--;)if(u[y]===h)return y;return y}function tt(u){return nt(u)?yc(u):ic(u)}function nn(u){return nt(u)?wc(u):rc(u)}function Xa(u){for(var h=u.length;h--&&cl.test(u.charAt(h)););return h}var bc=lr(Yl);function yc(u){for(var h=nr.lastIndex=0;nr.test(u);)++h;return h}function wc(u){return u.match(nr)||[]}function xc(u){return u.match(Dl)||[]}var kc=function u(h){h=h==null?fe:it.defaults(fe.Object(),h,it.pick(fe,Jl));var f=h.Array,y=h.Date,E=h.Error,U=h.Function,re=h.Math,H=h.Object,hr=h.RegExp,Tc=h.String,Ne=h.TypeError,Vt=f.prototype,Ac=U.prototype,rt=H.prototype,$t=h["__core-js_shared__"],ei=Ac.toString,N=rt.hasOwnProperty,Ic=0,Va=function(){var e=/[^.]+$/.exec($t&&$t.keys&&$t.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ni=rt.toString,Cc=ei.call(H),Ec=fe._,Mc=hr("^"+ei.call(N).replace(Yi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ti=Ba?h.Buffer:o,zn=h.Symbol,ii=h.Uint8Array,$a=ti?ti.allocUnsafe:o,ri=Za(H.getPrototypeOf,H),es=H.create,ns=rt.propertyIsEnumerable,ai=Vt.splice,ts=zn?zn.isConcatSpreadable:o,At=zn?zn.iterator:o,Un=zn?zn.toStringTag:o,si=function(){try{var e=Jn(H,"defineProperty");return e({},"",{}),e}catch{}}(),Sc=h.clearTimeout!==fe.clearTimeout&&h.clearTimeout,zc=y&&y.now!==fe.Date.now&&y.now,Rc=h.setTimeout!==fe.setTimeout&&h.setTimeout,oi=re.ceil,li=re.floor,gr=H.getOwnPropertySymbols,Lc=ti?ti.isBuffer:o,is=h.isFinite,qc=Vt.join,Bc=Za(H.keys,H),ae=re.max,pe=re.min,Oc=y.now,Pc=h.parseInt,rs=re.random,Wc=Vt.reverse,mr=Jn(h,"DataView"),It=Jn(h,"Map"),pr=Jn(h,"Promise"),at=Jn(h,"Set"),Ct=Jn(h,"WeakMap"),Et=Jn(H,"create"),ci=Ct&&new Ct,st={},Fc=jn(mr),Uc=jn(It),Gc=jn(pr),Dc=jn(at),Nc=jn(Ct),ui=zn?zn.prototype:o,Mt=ui?ui.valueOf:o,as=ui?ui.toString:o;function a(e){if(X(e)&&!M(e)&&!(e instanceof B)){if(e instanceof He)return e;if(N.call(e,"__wrapped__"))return so(e)}return new He(e)}var ot=function(){function e(){}return function(n){if(!Z(n))return{};if(es)return es(n);e.prototype=n;var t=new e;return e.prototype=o,t}}();function di(){}function He(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=o}a.templateSettings={escape:il,evaluate:rl,interpolate:ga,variable:"",imports:{_:a}},a.prototype=di.prototype,a.prototype.constructor=a,He.prototype=ot(di.prototype),He.prototype.constructor=He;function B(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function Hc(){var e=new B(this.__wrapped__);return e.__actions__=Ae(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ae(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ae(this.__views__),e}function Jc(){if(this.__filtered__){var e=new B(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function jc(){var e=this.__wrapped__.value(),n=this.__dir__,t=M(e),i=n<0,r=t?e.length:0,s=rd(0,r,this.__views__),l=s.start,c=s.end,d=c-l,m=i?c:l-1,p=this.__iteratees__,v=p.length,b=0,w=pe(d,this.__takeCount__);if(!t||!i&&r==d&&w==d)return Ms(e,this.__actions__);var k=[];e:for(;d--&&b<w;){m+=n;for(var R=-1,T=e[m];++R<v;){var q=p[R],O=q.iteratee,Be=q.type,we=O(T);if(Be==_t)T=we;else if(!we){if(Be==Yn)continue e;break e}}k[b++]=T}return k}B.prototype=ot(di.prototype),B.prototype.constructor=B;function Gn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function Kc(){this.__data__=Et?Et(null):{},this.size=0}function Qc(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function Yc(e){var n=this.__data__;if(Et){var t=n[e];return t===F?o:t}return N.call(n,e)?n[e]:o}function Zc(e){var n=this.__data__;return Et?n[e]!==o:N.call(n,e)}function Xc(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Et&&n===o?F:n,this}Gn.prototype.clear=Kc,Gn.prototype.delete=Qc,Gn.prototype.get=Yc,Gn.prototype.has=Zc,Gn.prototype.set=Xc;function vn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function Vc(){this.__data__=[],this.size=0}function $c(e){var n=this.__data__,t=fi(n,e);if(t<0)return!1;var i=n.length-1;return t==i?n.pop():ai.call(n,t,1),--this.size,!0}function eu(e){var n=this.__data__,t=fi(n,e);return t<0?o:n[t][1]}function nu(e){return fi(this.__data__,e)>-1}function tu(e,n){var t=this.__data__,i=fi(t,e);return i<0?(++this.size,t.push([e,n])):t[i][1]=n,this}vn.prototype.clear=Vc,vn.prototype.delete=$c,vn.prototype.get=eu,vn.prototype.has=nu,vn.prototype.set=tu;function _n(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function iu(){this.size=0,this.__data__={hash:new Gn,map:new(It||vn),string:new Gn}}function ru(e){var n=Ti(this,e).delete(e);return this.size-=n?1:0,n}function au(e){return Ti(this,e).get(e)}function su(e){return Ti(this,e).has(e)}function ou(e,n){var t=Ti(this,e),i=t.size;return t.set(e,n),this.size+=t.size==i?0:1,this}_n.prototype.clear=iu,_n.prototype.delete=ru,_n.prototype.get=au,_n.prototype.has=su,_n.prototype.set=ou;function Dn(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new _n;++n<t;)this.add(e[n])}function lu(e){return this.__data__.set(e,F),this}function cu(e){return this.__data__.has(e)}Dn.prototype.add=Dn.prototype.push=lu,Dn.prototype.has=cu;function tn(e){var n=this.__data__=new vn(e);this.size=n.size}function uu(){this.__data__=new vn,this.size=0}function du(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function fu(e){return this.__data__.get(e)}function hu(e){return this.__data__.has(e)}function gu(e,n){var t=this.__data__;if(t instanceof vn){var i=t.__data__;if(!It||i.length<on-1)return i.push([e,n]),this.size=++t.size,this;t=this.__data__=new _n(i)}return t.set(e,n),this.size=t.size,this}tn.prototype.clear=uu,tn.prototype.delete=du,tn.prototype.get=fu,tn.prototype.has=hu,tn.prototype.set=gu;function ss(e,n){var t=M(e),i=!t&&Kn(e),r=!t&&!i&&On(e),s=!t&&!i&&!r&&dt(e),l=t||i||r||s,c=l?ur(e.length,Tc):[],d=c.length;for(var m in e)(n||N.call(e,m))&&!(l&&(m=="length"||r&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||xn(m,d)))&&c.push(m);return c}function os(e){var n=e.length;return n?e[Cr(0,n-1)]:o}function mu(e,n){return Ai(Ae(e),Nn(n,0,e.length))}function pu(e){return Ai(Ae(e))}function vr(e,n,t){(t!==o&&!rn(e[n],t)||t===o&&!(n in e))&&bn(e,n,t)}function St(e,n,t){var i=e[n];(!(N.call(e,n)&&rn(i,t))||t===o&&!(n in e))&&bn(e,n,t)}function fi(e,n){for(var t=e.length;t--;)if(rn(e[t][0],n))return t;return-1}function vu(e,n,t,i){return Rn(e,function(r,s,l){n(i,r,t(r),l)}),i}function ls(e,n){return e&&fn(n,oe(n),e)}function _u(e,n){return e&&fn(n,Ce(n),e)}function bn(e,n,t){n=="__proto__"&&si?si(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function _r(e,n){for(var t=-1,i=n.length,r=f(i),s=e==null;++t<i;)r[t]=s?o:Vr(e,n[t]);return r}function Nn(e,n,t){return e===e&&(t!==o&&(e=e<=t?e:t),n!==o&&(e=e>=n?e:n)),e}function Je(e,n,t,i,r,s){var l,c=n&te,d=n&gn,m=n&We;if(t&&(l=r?t(e,i,r,s):t(e)),l!==o)return l;if(!Z(e))return e;var p=M(e);if(p){if(l=sd(e),!c)return Ae(e,l)}else{var v=ve(e),b=v==Xn||v==Ht;if(On(e))return Rs(e,c);if(v==pn||v==mn||b&&!r){if(l=d||b?{}:Xs(e),!c)return d?Yu(e,_u(l,e)):Qu(e,ls(l,e))}else{if(!J[v])return r?e:{};l=od(e,v,c)}}s||(s=new tn);var w=s.get(e);if(w)return w;s.set(e,l),Co(e)?e.forEach(function(T){l.add(Je(T,n,t,T,e,s))}):Ao(e)&&e.forEach(function(T,q){l.set(q,Je(T,n,t,q,e,s))});var k=m?d?Wr:Pr:d?Ce:oe,R=p?o:k(e);return De(R||e,function(T,q){R&&(q=T,T=e[q]),St(l,q,Je(T,n,t,q,e,s))}),l}function bu(e){var n=oe(e);return function(t){return cs(t,e,n)}}function cs(e,n,t){var i=t.length;if(e==null)return!i;for(e=H(e);i--;){var r=t[i],s=n[r],l=e[r];if(l===o&&!(r in e)||!s(l))return!1}return!0}function us(e,n,t){if(typeof e!="function")throw new Ne(V);return Pt(function(){e.apply(o,t)},n)}function zt(e,n,t,i){var r=-1,s=Yt,l=!0,c=e.length,d=[],m=n.length;if(!c)return d;t&&(n=Q(n,Re(t))),i?(s=rr,l=!1):n.length>=on&&(s=Tt,l=!1,n=new Dn(n));e:for(;++r<c;){var p=e[r],v=t==null?p:t(p);if(p=i||p!==0?p:0,l&&v===v){for(var b=m;b--;)if(n[b]===v)continue e;d.push(p)}else s(n,v,i)||d.push(p)}return d}var Rn=Ps(dn),ds=Ps(yr,!0);function yu(e,n){var t=!0;return Rn(e,function(i,r,s){return t=!!n(i,r,s),t}),t}function hi(e,n,t){for(var i=-1,r=e.length;++i<r;){var s=e[i],l=n(s);if(l!=null&&(c===o?l===l&&!qe(l):t(l,c)))var c=l,d=s}return d}function wu(e,n,t,i){var r=e.length;for(t=S(t),t<0&&(t=-t>r?0:r+t),i=i===o||i>r?r:S(i),i<0&&(i+=r),i=t>i?0:Mo(i);t<i;)e[t++]=n;return e}function fs(e,n){var t=[];return Rn(e,function(i,r,s){n(i,r,s)&&t.push(i)}),t}function he(e,n,t,i,r){var s=-1,l=e.length;for(t||(t=cd),r||(r=[]);++s<l;){var c=e[s];n>0&&t(c)?n>1?he(c,n-1,t,i,r):Mn(r,c):i||(r[r.length]=c)}return r}var br=Ws(),hs=Ws(!0);function dn(e,n){return e&&br(e,n,oe)}function yr(e,n){return e&&hs(e,n,oe)}function gi(e,n){return En(n,function(t){return kn(e[t])})}function Hn(e,n){n=qn(n,e);for(var t=0,i=n.length;e!=null&&t<i;)e=e[hn(n[t++])];return t&&t==i?e:o}function gs(e,n,t){var i=n(e);return M(e)?i:Mn(i,t(e))}function be(e){return e==null?e===o?Zo:Qo:Un&&Un in H(e)?id(e):pd(e)}function wr(e,n){return e>n}function xu(e,n){return e!=null&&N.call(e,n)}function ku(e,n){return e!=null&&n in H(e)}function Tu(e,n,t){return e>=pe(n,t)&&e<ae(n,t)}function xr(e,n,t){for(var i=t?rr:Yt,r=e[0].length,s=e.length,l=s,c=f(s),d=1/0,m=[];l--;){var p=e[l];l&&n&&(p=Q(p,Re(n))),d=pe(p.length,d),c[l]=!t&&(n||r>=120&&p.length>=120)?new Dn(l&&p):o}p=e[0];var v=-1,b=c[0];e:for(;++v<r&&m.length<d;){var w=p[v],k=n?n(w):w;if(w=t||w!==0?w:0,!(b?Tt(b,k):i(m,k,t))){for(l=s;--l;){var R=c[l];if(!(R?Tt(R,k):i(e[l],k,t)))continue e}b&&b.push(k),m.push(w)}}return m}function Au(e,n,t,i){return dn(e,function(r,s,l){n(i,t(r),s,l)}),i}function Rt(e,n,t){n=qn(n,e),e=no(e,n);var i=e==null?e:e[hn(Ke(n))];return i==null?o:ze(i,e,t)}function ms(e){return X(e)&&be(e)==mn}function Iu(e){return X(e)&&be(e)==kt}function Cu(e){return X(e)&&be(e)==G}function Lt(e,n,t,i,r){return e===n?!0:e==null||n==null||!X(e)&&!X(n)?e!==e&&n!==n:Eu(e,n,t,i,Lt,r)}function Eu(e,n,t,i,r,s){var l=M(e),c=M(n),d=l?Wn:ve(e),m=c?Wn:ve(n);d=d==mn?pn:d,m=m==mn?pn:m;var p=d==pn,v=m==pn,b=d==m;if(b&&On(e)){if(!On(n))return!1;l=!0,p=!1}if(b&&!p)return s||(s=new tn),l||dt(e)?Qs(e,n,t,i,r,s):nd(e,n,d,t,i,r,s);if(!(t&ce)){var w=p&&N.call(e,"__wrapped__"),k=v&&N.call(n,"__wrapped__");if(w||k){var R=w?e.value():e,T=k?n.value():n;return s||(s=new tn),r(R,T,t,i,s)}}return b?(s||(s=new tn),td(e,n,t,i,r,s)):!1}function Mu(e){return X(e)&&ve(e)==Se}function kr(e,n,t,i){var r=t.length,s=r,l=!i;if(e==null)return!s;for(e=H(e);r--;){var c=t[r];if(l&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++r<s;){c=t[r];var d=c[0],m=e[d],p=c[1];if(l&&c[2]){if(m===o&&!(d in e))return!1}else{var v=new tn;if(i)var b=i(m,p,d,e,n,v);if(!(b===o?Lt(p,m,ce|ue,i,v):b))return!1}}return!0}function ps(e){if(!Z(e)||dd(e))return!1;var n=kn(e)?Mc:bl;return n.test(jn(e))}function Su(e){return X(e)&&be(e)==yt}function zu(e){return X(e)&&ve(e)==en}function Ru(e){return X(e)&&zi(e.length)&&!!K[be(e)]}function vs(e){return typeof e=="function"?e:e==null?Ee:typeof e=="object"?M(e)?ys(e[0],e[1]):bs(e):Uo(e)}function Tr(e){if(!Ot(e))return Bc(e);var n=[];for(var t in H(e))N.call(e,t)&&t!="constructor"&&n.push(t);return n}function Lu(e){if(!Z(e))return md(e);var n=Ot(e),t=[];for(var i in e)i=="constructor"&&(n||!N.call(e,i))||t.push(i);return t}function Ar(e,n){return e<n}function _s(e,n){var t=-1,i=Ie(e)?f(e.length):[];return Rn(e,function(r,s,l){i[++t]=n(r,s,l)}),i}function bs(e){var n=Ur(e);return n.length==1&&n[0][2]?$s(n[0][0],n[0][1]):function(t){return t===e||kr(t,e,n)}}function ys(e,n){return Dr(e)&&Vs(n)?$s(hn(e),n):function(t){var i=Vr(t,e);return i===o&&i===n?$r(t,e):Lt(n,i,ce|ue)}}function mi(e,n,t,i,r){e!==n&&br(n,function(s,l){if(r||(r=new tn),Z(s))qu(e,n,l,t,mi,i,r);else{var c=i?i(Hr(e,l),s,l+"",e,n,r):o;c===o&&(c=s),vr(e,l,c)}},Ce)}function qu(e,n,t,i,r,s,l){var c=Hr(e,t),d=Hr(n,t),m=l.get(d);if(m){vr(e,t,m);return}var p=s?s(c,d,t+"",e,n,l):o,v=p===o;if(v){var b=M(d),w=!b&&On(d),k=!b&&!w&&dt(d);p=d,b||w||k?M(c)?p=c:$(c)?p=Ae(c):w?(v=!1,p=Rs(d,!0)):k?(v=!1,p=Ls(d,!0)):p=[]:Wt(d)||Kn(d)?(p=c,Kn(c)?p=So(c):(!Z(c)||kn(c))&&(p=Xs(d))):v=!1}v&&(l.set(d,p),r(p,d,i,s,l),l.delete(d)),vr(e,t,p)}function ws(e,n){var t=e.length;if(t)return n+=n<0?t:0,xn(n,t)?e[n]:o}function xs(e,n,t){n.length?n=Q(n,function(s){return M(s)?function(l){return Hn(l,s.length===1?s[0]:s)}:s}):n=[Ee];var i=-1;n=Q(n,Re(x()));var r=_s(e,function(s,l,c){var d=Q(n,function(m){return m(s)});return{criteria:d,index:++i,value:s}});return oc(r,function(s,l){return Ku(s,l,t)})}function Bu(e,n){return ks(e,n,function(t,i){return $r(e,i)})}function ks(e,n,t){for(var i=-1,r=n.length,s={};++i<r;){var l=n[i],c=Hn(e,l);t(c,l)&&qt(s,qn(l,e),c)}return s}function Ou(e){return function(n){return Hn(n,e)}}function Ir(e,n,t,i){var r=i?sc:et,s=-1,l=n.length,c=e;for(e===n&&(n=Ae(n)),t&&(c=Q(e,Re(t)));++s<l;)for(var d=0,m=n[s],p=t?t(m):m;(d=r(c,p,d,i))>-1;)c!==e&&ai.call(c,d,1),ai.call(e,d,1);return e}function Ts(e,n){for(var t=e?n.length:0,i=t-1;t--;){var r=n[t];if(t==i||r!==s){var s=r;xn(r)?ai.call(e,r,1):Sr(e,r)}}return e}function Cr(e,n){return e+li(rs()*(n-e+1))}function Pu(e,n,t,i){for(var r=-1,s=ae(oi((n-e)/(t||1)),0),l=f(s);s--;)l[i?s:++r]=e,e+=t;return l}function Er(e,n){var t="";if(!e||n<1||n>cn)return t;do n%2&&(t+=e),n=li(n/2),n&&(e+=e);while(n);return t}function L(e,n){return Jr(eo(e,n,Ee),e+"")}function Wu(e){return os(ft(e))}function Fu(e,n){var t=ft(e);return Ai(t,Nn(n,0,t.length))}function qt(e,n,t,i){if(!Z(e))return e;n=qn(n,e);for(var r=-1,s=n.length,l=s-1,c=e;c!=null&&++r<s;){var d=hn(n[r]),m=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(r!=l){var p=c[d];m=i?i(p,d,c):o,m===o&&(m=Z(p)?p:xn(n[r+1])?[]:{})}St(c,d,m),c=c[d]}return e}var As=ci?function(e,n){return ci.set(e,n),e}:Ee,Uu=si?function(e,n){return si(e,"toString",{configurable:!0,enumerable:!1,value:na(n),writable:!0})}:Ee;function Gu(e){return Ai(ft(e))}function je(e,n,t){var i=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var s=f(r);++i<r;)s[i]=e[i+n];return s}function Du(e,n){var t;return Rn(e,function(i,r,s){return t=n(i,r,s),!t}),!!t}function pi(e,n,t){var i=0,r=e==null?i:e.length;if(typeof n=="number"&&n===n&&r<=Nt){for(;i<r;){var s=i+r>>>1,l=e[s];l!==null&&!qe(l)&&(t?l<=n:l<n)?i=s+1:r=s}return r}return Mr(e,n,Ee,t)}function Mr(e,n,t,i){var r=0,s=e==null?0:e.length;if(s===0)return 0;n=t(n);for(var l=n!==n,c=n===null,d=qe(n),m=n===o;r<s;){var p=li((r+s)/2),v=t(e[p]),b=v!==o,w=v===null,k=v===v,R=qe(v);if(l)var T=i||k;else m?T=k&&(i||b):c?T=k&&b&&(i||!w):d?T=k&&b&&!w&&(i||!R):w||R?T=!1:T=i?v<=n:v<n;T?r=p+1:s=p}return pe(s,Dt)}function Is(e,n){for(var t=-1,i=e.length,r=0,s=[];++t<i;){var l=e[t],c=n?n(l):l;if(!t||!rn(c,d)){var d=c;s[r++]=l===0?0:l}}return s}function Cs(e){return typeof e=="number"?e:qe(e)?Zn:+e}function Le(e){if(typeof e=="string")return e;if(M(e))return Q(e,Le)+"";if(qe(e))return as?as.call(e):"";var n=e+"";return n=="0"&&1/e==-ln?"-0":n}function Ln(e,n,t){var i=-1,r=Yt,s=e.length,l=!0,c=[],d=c;if(t)l=!1,r=rr;else if(s>=on){var m=n?null:$u(e);if(m)return Xt(m);l=!1,r=Tt,d=new Dn}else d=n?[]:c;e:for(;++i<s;){var p=e[i],v=n?n(p):p;if(p=t||p!==0?p:0,l&&v===v){for(var b=d.length;b--;)if(d[b]===v)continue e;n&&d.push(v),c.push(p)}else r(d,v,t)||(d!==c&&d.push(v),c.push(p))}return c}function Sr(e,n){return n=qn(n,e),e=no(e,n),e==null||delete e[hn(Ke(n))]}function Es(e,n,t,i){return qt(e,n,t(Hn(e,n)),i)}function vi(e,n,t,i){for(var r=e.length,s=i?r:-1;(i?s--:++s<r)&&n(e[s],s,e););return t?je(e,i?0:s,i?s+1:r):je(e,i?s+1:0,i?r:s)}function Ms(e,n){var t=e;return t instanceof B&&(t=t.value()),ar(n,function(i,r){return r.func.apply(r.thisArg,Mn([i],r.args))},t)}function zr(e,n,t){var i=e.length;if(i<2)return i?Ln(e[0]):[];for(var r=-1,s=f(i);++r<i;)for(var l=e[r],c=-1;++c<i;)c!=r&&(s[r]=zt(s[r]||l,e[c],n,t));return Ln(he(s,1),n,t)}function Ss(e,n,t){for(var i=-1,r=e.length,s=n.length,l={};++i<r;){var c=i<s?n[i]:o;t(l,e[i],c)}return l}function Rr(e){return $(e)?e:[]}function Lr(e){return typeof e=="function"?e:Ee}function qn(e,n){return M(e)?e:Dr(e,n)?[e]:ao(D(e))}var Nu=L;function Bn(e,n,t){var i=e.length;return t=t===o?i:t,!n&&t>=i?e:je(e,n,t)}var zs=Sc||function(e){return fe.clearTimeout(e)};function Rs(e,n){if(n)return e.slice();var t=e.length,i=$a?$a(t):new e.constructor(t);return e.copy(i),i}function qr(e){var n=new e.constructor(e.byteLength);return new ii(n).set(new ii(e)),n}function Hu(e,n){var t=n?qr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}function Ju(e){var n=new e.constructor(e.source,ma.exec(e));return n.lastIndex=e.lastIndex,n}function ju(e){return Mt?H(Mt.call(e)):{}}function Ls(e,n){var t=n?qr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function qs(e,n){if(e!==n){var t=e!==o,i=e===null,r=e===e,s=qe(e),l=n!==o,c=n===null,d=n===n,m=qe(n);if(!c&&!m&&!s&&e>n||s&&l&&d&&!c&&!m||i&&l&&d||!t&&d||!r)return 1;if(!i&&!s&&!m&&e<n||m&&t&&r&&!i&&!s||c&&t&&r||!l&&r||!d)return-1}return 0}function Ku(e,n,t){for(var i=-1,r=e.criteria,s=n.criteria,l=r.length,c=t.length;++i<l;){var d=qs(r[i],s[i]);if(d){if(i>=c)return d;var m=t[i];return d*(m=="desc"?-1:1)}}return e.index-n.index}function Bs(e,n,t,i){for(var r=-1,s=e.length,l=t.length,c=-1,d=n.length,m=ae(s-l,0),p=f(d+m),v=!i;++c<d;)p[c]=n[c];for(;++r<l;)(v||r<s)&&(p[t[r]]=e[r]);for(;m--;)p[c++]=e[r++];return p}function Os(e,n,t,i){for(var r=-1,s=e.length,l=-1,c=t.length,d=-1,m=n.length,p=ae(s-c,0),v=f(p+m),b=!i;++r<p;)v[r]=e[r];for(var w=r;++d<m;)v[w+d]=n[d];for(;++l<c;)(b||r<s)&&(v[w+t[l]]=e[r++]);return v}function Ae(e,n){var t=-1,i=e.length;for(n||(n=f(i));++t<i;)n[t]=e[t];return n}function fn(e,n,t,i){var r=!t;t||(t={});for(var s=-1,l=n.length;++s<l;){var c=n[s],d=i?i(t[c],e[c],c,t,e):o;d===o&&(d=e[c]),r?bn(t,c,d):St(t,c,d)}return t}function Qu(e,n){return fn(e,Gr(e),n)}function Yu(e,n){return fn(e,Ys(e),n)}function _i(e,n){return function(t,i){var r=M(t)?ec:vu,s=n?n():{};return r(t,e,x(i,2),s)}}function lt(e){return L(function(n,t){var i=-1,r=t.length,s=r>1?t[r-1]:o,l=r>2?t[2]:o;for(s=e.length>3&&typeof s=="function"?(r--,s):o,l&&ye(t[0],t[1],l)&&(s=r<3?o:s,r=1),n=H(n);++i<r;){var c=t[i];c&&e(n,c,i,s)}return n})}function Ps(e,n){return function(t,i){if(t==null)return t;if(!Ie(t))return e(t,i);for(var r=t.length,s=n?r:-1,l=H(t);(n?s--:++s<r)&&i(l[s],s,l)!==!1;);return t}}function Ws(e){return function(n,t,i){for(var r=-1,s=H(n),l=i(n),c=l.length;c--;){var d=l[e?c:++r];if(t(s[d],d,s)===!1)break}return n}}function Zu(e,n,t){var i=n&ie,r=Bt(e);function s(){var l=this&&this!==fe&&this instanceof s?r:e;return l.apply(i?t:this,arguments)}return s}function Fs(e){return function(n){n=D(n);var t=nt(n)?nn(n):o,i=t?t[0]:n.charAt(0),r=t?Bn(t,1).join(""):n.slice(1);return i[e]()+r}}function ct(e){return function(n){return ar(Wo(Po(n).replace(Ul,"")),e,"")}}function Bt(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var t=ot(e.prototype),i=e.apply(t,n);return Z(i)?i:t}}function Xu(e,n,t){var i=Bt(e);function r(){for(var s=arguments.length,l=f(s),c=s,d=ut(r);c--;)l[c]=arguments[c];var m=s<3&&l[0]!==d&&l[s-1]!==d?[]:Sn(l,d);if(s-=m.length,s<t)return Hs(e,n,bi,r.placeholder,o,l,m,o,o,t-s);var p=this&&this!==fe&&this instanceof r?i:e;return ze(p,this,l)}return r}function Us(e){return function(n,t,i){var r=H(n);if(!Ie(n)){var s=x(t,3);n=oe(n),t=function(c){return s(r[c],c,r)}}var l=e(n,t,i);return l>-1?r[s?n[l]:l]:o}}function Gs(e){return wn(function(n){var t=n.length,i=t,r=He.prototype.thru;for(e&&n.reverse();i--;){var s=n[i];if(typeof s!="function")throw new Ne(V);if(r&&!l&&ki(s)=="wrapper")var l=new He([],!0)}for(i=l?i:t;++i<t;){s=n[i];var c=ki(s),d=c=="wrapper"?Fr(s):o;d&&Nr(d[0])&&d[1]==(Ue|me|_e|Te)&&!d[4].length&&d[9]==1?l=l[ki(d[0])].apply(l,d[3]):l=s.length==1&&Nr(s)?l[c]():l.thru(s)}return function(){var m=arguments,p=m[0];if(l&&m.length==1&&M(p))return l.plant(p).value();for(var v=0,b=t?n[v].apply(this,m):p;++v<t;)b=n[v].call(this,b);return b}})}function bi(e,n,t,i,r,s,l,c,d,m){var p=n&Ue,v=n&ie,b=n&ge,w=n&(me|ke),k=n&mt,R=b?o:Bt(e);function T(){for(var q=arguments.length,O=f(q),Be=q;Be--;)O[Be]=arguments[Be];if(w)var we=ut(T),Oe=cc(O,we);if(i&&(O=Bs(O,i,r,w)),s&&(O=Os(O,s,l,w)),q-=Oe,w&&q<m){var ee=Sn(O,we);return Hs(e,n,bi,T.placeholder,t,O,ee,c,d,m-q)}var an=v?t:this,An=b?an[e]:e;return q=O.length,c?O=vd(O,c):k&&q>1&&O.reverse(),p&&d<q&&(O.length=d),this&&this!==fe&&this instanceof T&&(An=R||Bt(An)),An.apply(an,O)}return T}function Ds(e,n){return function(t,i){return Au(t,e,n(i),{})}}function yi(e,n){return function(t,i){var r;if(t===o&&i===o)return n;if(t!==o&&(r=t),i!==o){if(r===o)return i;typeof t=="string"||typeof i=="string"?(t=Le(t),i=Le(i)):(t=Cs(t),i=Cs(i)),r=e(t,i)}return r}}function Br(e){return wn(function(n){return n=Q(n,Re(x())),L(function(t){var i=this;return e(n,function(r){return ze(r,i,t)})})})}function wi(e,n){n=n===o?" ":Le(n);var t=n.length;if(t<2)return t?Er(n,e):n;var i=Er(n,oi(e/tt(n)));return nt(n)?Bn(nn(i),0,e).join(""):i.slice(0,e)}function Vu(e,n,t,i){var r=n&ie,s=Bt(e);function l(){for(var c=-1,d=arguments.length,m=-1,p=i.length,v=f(p+d),b=this&&this!==fe&&this instanceof l?s:e;++m<p;)v[m]=i[m];for(;d--;)v[m++]=arguments[++c];return ze(b,r?t:this,v)}return l}function Ns(e){return function(n,t,i){return i&&typeof i!="number"&&ye(n,t,i)&&(t=i=o),n=Tn(n),t===o?(t=n,n=0):t=Tn(t),i=i===o?n<t?1:-1:Tn(i),Pu(n,t,i,e)}}function xi(e){return function(n,t){return typeof n=="string"&&typeof t=="string"||(n=Qe(n),t=Qe(t)),e(n,t)}}function Hs(e,n,t,i,r,s,l,c,d,m){var p=n&me,v=p?l:o,b=p?o:l,w=p?s:o,k=p?o:s;n|=p?_e:Fe,n&=~(p?Fe:_e),n&se||(n&=~(ie|ge));var R=[e,n,r,w,v,k,b,c,d,m],T=t.apply(o,R);return Nr(e)&&to(T,R),T.placeholder=i,io(T,e,n)}function Or(e){var n=re[e];return function(t,i){if(t=Qe(t),i=i==null?0:pe(S(i),292),i&&is(t)){var r=(D(t)+"e").split("e"),s=n(r[0]+"e"+(+r[1]+i));return r=(D(s)+"e").split("e"),+(r[0]+"e"+(+r[1]-i))}return n(t)}}var $u=at&&1/Xt(new at([,-0]))[1]==ln?function(e){return new at(e)}:ra;function Js(e){return function(n){var t=ve(n);return t==Se?fr(n):t==en?pc(n):lc(n,e(n))}}function yn(e,n,t,i,r,s,l,c){var d=n&ge;if(!d&&typeof e!="function")throw new Ne(V);var m=i?i.length:0;if(m||(n&=~(_e|Fe),i=r=o),l=l===o?l:ae(S(l),0),c=c===o?c:S(c),m-=r?r.length:0,n&Fe){var p=i,v=r;i=r=o}var b=d?o:Fr(e),w=[e,n,t,i,r,p,v,s,l,c];if(b&&gd(w,b),e=w[0],n=w[1],t=w[2],i=w[3],r=w[4],c=w[9]=w[9]===o?d?0:e.length:ae(w[9]-m,0),!c&&n&(me|ke)&&(n&=~(me|ke)),!n||n==ie)var k=Zu(e,n,t);else n==me||n==ke?k=Xu(e,n,c):(n==_e||n==(ie|_e))&&!r.length?k=Vu(e,n,t,i):k=bi.apply(o,w);var R=b?As:to;return io(R(k,w),e,n)}function js(e,n,t,i){return e===o||rn(e,rt[t])&&!N.call(i,t)?n:e}function Ks(e,n,t,i,r,s){return Z(e)&&Z(n)&&(s.set(n,e),mi(e,n,o,Ks,s),s.delete(n)),e}function ed(e){return Wt(e)?o:e}function Qs(e,n,t,i,r,s){var l=t&ce,c=e.length,d=n.length;if(c!=d&&!(l&&d>c))return!1;var m=s.get(e),p=s.get(n);if(m&&p)return m==n&&p==e;var v=-1,b=!0,w=t&ue?new Dn:o;for(s.set(e,n),s.set(n,e);++v<c;){var k=e[v],R=n[v];if(i)var T=l?i(R,k,v,n,e,s):i(k,R,v,e,n,s);if(T!==o){if(T)continue;b=!1;break}if(w){if(!sr(n,function(q,O){if(!Tt(w,O)&&(k===q||r(k,q,t,i,s)))return w.push(O)})){b=!1;break}}else if(!(k===R||r(k,R,t,i,s))){b=!1;break}}return s.delete(e),s.delete(n),b}function nd(e,n,t,i,r,s,l){switch(t){case Vn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case kt:return!(e.byteLength!=n.byteLength||!s(new ii(e),new ii(n)));case z:case G:case bt:return rn(+e,+n);case un:return e.name==n.name&&e.message==n.message;case yt:case wt:return e==n+"";case Se:var c=fr;case en:var d=i&ce;if(c||(c=Xt),e.size!=n.size&&!d)return!1;var m=l.get(e);if(m)return m==n;i|=ue,l.set(e,n);var p=Qs(c(e),c(n),i,r,s,l);return l.delete(e),p;case Jt:if(Mt)return Mt.call(e)==Mt.call(n)}return!1}function td(e,n,t,i,r,s){var l=t&ce,c=Pr(e),d=c.length,m=Pr(n),p=m.length;if(d!=p&&!l)return!1;for(var v=d;v--;){var b=c[v];if(!(l?b in n:N.call(n,b)))return!1}var w=s.get(e),k=s.get(n);if(w&&k)return w==n&&k==e;var R=!0;s.set(e,n),s.set(n,e);for(var T=l;++v<d;){b=c[v];var q=e[b],O=n[b];if(i)var Be=l?i(O,q,b,n,e,s):i(q,O,b,e,n,s);if(!(Be===o?q===O||r(q,O,t,i,s):Be)){R=!1;break}T||(T=b=="constructor")}if(R&&!T){var we=e.constructor,Oe=n.constructor;we!=Oe&&"constructor"in e&&"constructor"in n&&!(typeof we=="function"&&we instanceof we&&typeof Oe=="function"&&Oe instanceof Oe)&&(R=!1)}return s.delete(e),s.delete(n),R}function wn(e){return Jr(eo(e,o,co),e+"")}function Pr(e){return gs(e,oe,Gr)}function Wr(e){return gs(e,Ce,Ys)}var Fr=ci?function(e){return ci.get(e)}:ra;function ki(e){for(var n=e.name+"",t=st[n],i=N.call(st,n)?t.length:0;i--;){var r=t[i],s=r.func;if(s==null||s==e)return r.name}return n}function ut(e){var n=N.call(a,"placeholder")?a:e;return n.placeholder}function x(){var e=a.iteratee||ta;return e=e===ta?vs:e,arguments.length?e(arguments[0],arguments[1]):e}function Ti(e,n){var t=e.__data__;return ud(n)?t[typeof n=="string"?"string":"hash"]:t.map}function Ur(e){for(var n=oe(e),t=n.length;t--;){var i=n[t],r=e[i];n[t]=[i,r,Vs(r)]}return n}function Jn(e,n){var t=hc(e,n);return ps(t)?t:o}function id(e){var n=N.call(e,Un),t=e[Un];try{e[Un]=o;var i=!0}catch{}var r=ni.call(e);return i&&(n?e[Un]=t:delete e[Un]),r}var Gr=gr?function(e){return e==null?[]:(e=H(e),En(gr(e),function(n){return ns.call(e,n)}))}:aa,Ys=gr?function(e){for(var n=[];e;)Mn(n,Gr(e)),e=ri(e);return n}:aa,ve=be;(mr&&ve(new mr(new ArrayBuffer(1)))!=Vn||It&&ve(new It)!=Se||pr&&ve(pr.resolve())!=da||at&&ve(new at)!=en||Ct&&ve(new Ct)!=xt)&&(ve=function(e){var n=be(e),t=n==pn?e.constructor:o,i=t?jn(t):"";if(i)switch(i){case Fc:return Vn;case Uc:return Se;case Gc:return da;case Dc:return en;case Nc:return xt}return n});function rd(e,n,t){for(var i=-1,r=t.length;++i<r;){var s=t[i],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=pe(n,e+l);break;case"takeRight":e=ae(e,n-l);break}}return{start:e,end:n}}function ad(e){var n=e.match(dl);return n?n[1].split(fl):[]}function Zs(e,n,t){n=qn(n,e);for(var i=-1,r=n.length,s=!1;++i<r;){var l=hn(n[i]);if(!(s=e!=null&&t(e,l)))break;e=e[l]}return s||++i!=r?s:(r=e==null?0:e.length,!!r&&zi(r)&&xn(l,r)&&(M(e)||Kn(e)))}function sd(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&N.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function Xs(e){return typeof e.constructor=="function"&&!Ot(e)?ot(ri(e)):{}}function od(e,n,t){var i=e.constructor;switch(n){case kt:return qr(e);case z:case G:return new i(+e);case Vn:return Hu(e,t);case Ui:case Gi:case Di:case Ni:case Hi:case Ji:case ji:case Ki:case Qi:return Ls(e,t);case Se:return new i;case bt:case wt:return new i(e);case yt:return Ju(e);case en:return new i;case Jt:return ju(e)}}function ld(e,n){var t=n.length;if(!t)return e;var i=t-1;return n[i]=(t>1?"& ":"")+n[i],n=n.join(t>2?", ":" "),e.replace(ul,`{
/* [wrapped with `+n+`] */
`)}function cd(e){return M(e)||Kn(e)||!!(ts&&e&&e[ts])}function xn(e,n){var t=typeof e;return n=n==null?cn:n,!!n&&(t=="number"||t!="symbol"&&wl.test(e))&&e>-1&&e%1==0&&e<n}function ye(e,n,t){if(!Z(t))return!1;var i=typeof n;return(i=="number"?Ie(t)&&xn(n,t.length):i=="string"&&n in t)?rn(t[n],e):!1}function Dr(e,n){if(M(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||qe(e)?!0:sl.test(e)||!al.test(e)||n!=null&&e in H(n)}function ud(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Nr(e){var n=ki(e),t=a[n];if(typeof t!="function"||!(n in B.prototype))return!1;if(e===t)return!0;var i=Fr(t);return!!i&&e===i[0]}function dd(e){return!!Va&&Va in e}var fd=$t?kn:sa;function Ot(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||rt;return e===t}function Vs(e){return e===e&&!Z(e)}function $s(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==o||e in H(t))}}function hd(e){var n=Mi(e,function(i){return t.size===Ve&&t.clear(),i}),t=n.cache;return n}function gd(e,n){var t=e[1],i=n[1],r=t|i,s=r<(ie|ge|Ue),l=i==Ue&&t==me||i==Ue&&t==Te&&e[7].length<=n[8]||i==(Ue|Te)&&n[7].length<=n[8]&&t==me;if(!(s||l))return e;i&ie&&(e[2]=n[2],r|=t&ie?0:se);var c=n[3];if(c){var d=e[3];e[3]=d?Bs(d,c,n[4]):c,e[4]=d?Sn(e[3],$e):n[4]}return c=n[5],c&&(d=e[5],e[5]=d?Os(d,c,n[6]):c,e[6]=d?Sn(e[5],$e):n[6]),c=n[7],c&&(e[7]=c),i&Ue&&(e[8]=e[8]==null?n[8]:pe(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=r,e}function md(e){var n=[];if(e!=null)for(var t in H(e))n.push(t);return n}function pd(e){return ni.call(e)}function eo(e,n,t){return n=ae(n===o?e.length-1:n,0),function(){for(var i=arguments,r=-1,s=ae(i.length-n,0),l=f(s);++r<s;)l[r]=i[n+r];r=-1;for(var c=f(n+1);++r<n;)c[r]=i[r];return c[n]=t(l),ze(e,this,c)}}function no(e,n){return n.length<2?e:Hn(e,je(n,0,-1))}function vd(e,n){for(var t=e.length,i=pe(n.length,t),r=Ae(e);i--;){var s=n[i];e[i]=xn(s,t)?r[s]:o}return e}function Hr(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var to=ro(As),Pt=Rc||function(e,n){return fe.setTimeout(e,n)},Jr=ro(Uu);function io(e,n,t){var i=n+"";return Jr(e,ld(i,_d(ad(i),t)))}function ro(e){var n=0,t=0;return function(){var i=Oc(),r=vt-(i-t);if(t=i,r>0){if(++n>=Oi)return arguments[0]}else n=0;return e.apply(o,arguments)}}function Ai(e,n){var t=-1,i=e.length,r=i-1;for(n=n===o?i:n;++t<n;){var s=Cr(t,r),l=e[s];e[s]=e[t],e[t]=l}return e.length=n,e}var ao=hd(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(ol,function(t,i,r,s){n.push(r?s.replace(ml,"$1"):i||t)}),n});function hn(e){if(typeof e=="string"||qe(e))return e;var n=e+"";return n=="0"&&1/e==-ln?"-0":n}function jn(e){if(e!=null){try{return ei.call(e)}catch{}try{return e+""}catch{}}return""}function _d(e,n){return De(Fi,function(t){var i="_."+t[0];n&t[1]&&!Yt(e,i)&&e.push(i)}),e.sort()}function so(e){if(e instanceof B)return e.clone();var n=new He(e.__wrapped__,e.__chain__);return n.__actions__=Ae(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function bd(e,n,t){(t?ye(e,n,t):n===o)?n=1:n=ae(S(n),0);var i=e==null?0:e.length;if(!i||n<1)return[];for(var r=0,s=0,l=f(oi(i/n));r<i;)l[s++]=je(e,r,r+=n);return l}function yd(e){for(var n=-1,t=e==null?0:e.length,i=0,r=[];++n<t;){var s=e[n];s&&(r[i++]=s)}return r}function wd(){var e=arguments.length;if(!e)return[];for(var n=f(e-1),t=arguments[0],i=e;i--;)n[i-1]=arguments[i];return Mn(M(t)?Ae(t):[t],he(n,1))}var xd=L(function(e,n){return $(e)?zt(e,he(n,1,$,!0)):[]}),kd=L(function(e,n){var t=Ke(n);return $(t)&&(t=o),$(e)?zt(e,he(n,1,$,!0),x(t,2)):[]}),Td=L(function(e,n){var t=Ke(n);return $(t)&&(t=o),$(e)?zt(e,he(n,1,$,!0),o,t):[]});function Ad(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===o?1:S(n),je(e,n<0?0:n,i)):[]}function Id(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===o?1:S(n),n=i-n,je(e,0,n<0?0:n)):[]}function Cd(e,n){return e&&e.length?vi(e,x(n,3),!0,!0):[]}function Ed(e,n){return e&&e.length?vi(e,x(n,3),!0):[]}function Md(e,n,t,i){var r=e==null?0:e.length;return r?(t&&typeof t!="number"&&ye(e,n,t)&&(t=0,i=r),wu(e,n,t,i)):[]}function oo(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=t==null?0:S(t);return r<0&&(r=ae(i+r,0)),Zt(e,x(n,3),r)}function lo(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=i-1;return t!==o&&(r=S(t),r=t<0?ae(i+r,0):pe(r,i-1)),Zt(e,x(n,3),r,!0)}function co(e){var n=e==null?0:e.length;return n?he(e,1):[]}function Sd(e){var n=e==null?0:e.length;return n?he(e,ln):[]}function zd(e,n){var t=e==null?0:e.length;return t?(n=n===o?1:S(n),he(e,n)):[]}function Rd(e){for(var n=-1,t=e==null?0:e.length,i={};++n<t;){var r=e[n];i[r[0]]=r[1]}return i}function uo(e){return e&&e.length?e[0]:o}function Ld(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=t==null?0:S(t);return r<0&&(r=ae(i+r,0)),et(e,n,r)}function qd(e){var n=e==null?0:e.length;return n?je(e,0,-1):[]}var Bd=L(function(e){var n=Q(e,Rr);return n.length&&n[0]===e[0]?xr(n):[]}),Od=L(function(e){var n=Ke(e),t=Q(e,Rr);return n===Ke(t)?n=o:t.pop(),t.length&&t[0]===e[0]?xr(t,x(n,2)):[]}),Pd=L(function(e){var n=Ke(e),t=Q(e,Rr);return n=typeof n=="function"?n:o,n&&t.pop(),t.length&&t[0]===e[0]?xr(t,o,n):[]});function Wd(e,n){return e==null?"":qc.call(e,n)}function Ke(e){var n=e==null?0:e.length;return n?e[n-1]:o}function Fd(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var r=i;return t!==o&&(r=S(t),r=r<0?ae(i+r,0):pe(r,i-1)),n===n?_c(e,n,r):Zt(e,Ha,r,!0)}function Ud(e,n){return e&&e.length?ws(e,S(n)):o}var Gd=L(fo);function fo(e,n){return e&&e.length&&n&&n.length?Ir(e,n):e}function Dd(e,n,t){return e&&e.length&&n&&n.length?Ir(e,n,x(t,2)):e}function Nd(e,n,t){return e&&e.length&&n&&n.length?Ir(e,n,o,t):e}var Hd=wn(function(e,n){var t=e==null?0:e.length,i=_r(e,n);return Ts(e,Q(n,function(r){return xn(r,t)?+r:r}).sort(qs)),i});function Jd(e,n){var t=[];if(!(e&&e.length))return t;var i=-1,r=[],s=e.length;for(n=x(n,3);++i<s;){var l=e[i];n(l,i,e)&&(t.push(l),r.push(i))}return Ts(e,r),t}function jr(e){return e==null?e:Wc.call(e)}function jd(e,n,t){var i=e==null?0:e.length;return i?(t&&typeof t!="number"&&ye(e,n,t)?(n=0,t=i):(n=n==null?0:S(n),t=t===o?i:S(t)),je(e,n,t)):[]}function Kd(e,n){return pi(e,n)}function Qd(e,n,t){return Mr(e,n,x(t,2))}function Yd(e,n){var t=e==null?0:e.length;if(t){var i=pi(e,n);if(i<t&&rn(e[i],n))return i}return-1}function Zd(e,n){return pi(e,n,!0)}function Xd(e,n,t){return Mr(e,n,x(t,2),!0)}function Vd(e,n){var t=e==null?0:e.length;if(t){var i=pi(e,n,!0)-1;if(rn(e[i],n))return i}return-1}function $d(e){return e&&e.length?Is(e):[]}function ef(e,n){return e&&e.length?Is(e,x(n,2)):[]}function nf(e){var n=e==null?0:e.length;return n?je(e,1,n):[]}function tf(e,n,t){return e&&e.length?(n=t||n===o?1:S(n),je(e,0,n<0?0:n)):[]}function rf(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===o?1:S(n),n=i-n,je(e,n<0?0:n,i)):[]}function af(e,n){return e&&e.length?vi(e,x(n,3),!1,!0):[]}function sf(e,n){return e&&e.length?vi(e,x(n,3)):[]}var of=L(function(e){return Ln(he(e,1,$,!0))}),lf=L(function(e){var n=Ke(e);return $(n)&&(n=o),Ln(he(e,1,$,!0),x(n,2))}),cf=L(function(e){var n=Ke(e);return n=typeof n=="function"?n:o,Ln(he(e,1,$,!0),o,n)});function uf(e){return e&&e.length?Ln(e):[]}function df(e,n){return e&&e.length?Ln(e,x(n,2)):[]}function ff(e,n){return n=typeof n=="function"?n:o,e&&e.length?Ln(e,o,n):[]}function Kr(e){if(!(e&&e.length))return[];var n=0;return e=En(e,function(t){if($(t))return n=ae(t.length,n),!0}),ur(n,function(t){return Q(e,or(t))})}function ho(e,n){if(!(e&&e.length))return[];var t=Kr(e);return n==null?t:Q(t,function(i){return ze(n,o,i)})}var hf=L(function(e,n){return $(e)?zt(e,n):[]}),gf=L(function(e){return zr(En(e,$))}),mf=L(function(e){var n=Ke(e);return $(n)&&(n=o),zr(En(e,$),x(n,2))}),pf=L(function(e){var n=Ke(e);return n=typeof n=="function"?n:o,zr(En(e,$),o,n)}),vf=L(Kr);function _f(e,n){return Ss(e||[],n||[],St)}function bf(e,n){return Ss(e||[],n||[],qt)}var yf=L(function(e){var n=e.length,t=n>1?e[n-1]:o;return t=typeof t=="function"?(e.pop(),t):o,ho(e,t)});function go(e){var n=a(e);return n.__chain__=!0,n}function wf(e,n){return n(e),e}function Ii(e,n){return n(e)}var xf=wn(function(e){var n=e.length,t=n?e[0]:0,i=this.__wrapped__,r=function(s){return _r(s,e)};return n>1||this.__actions__.length||!(i instanceof B)||!xn(t)?this.thru(r):(i=i.slice(t,+t+(n?1:0)),i.__actions__.push({func:Ii,args:[r],thisArg:o}),new He(i,this.__chain__).thru(function(s){return n&&!s.length&&s.push(o),s}))});function kf(){return go(this)}function Tf(){return new He(this.value(),this.__chain__)}function Af(){this.__values__===o&&(this.__values__=Eo(this.value()));var e=this.__index__>=this.__values__.length,n=e?o:this.__values__[this.__index__++];return{done:e,value:n}}function If(){return this}function Cf(e){for(var n,t=this;t instanceof di;){var i=so(t);i.__index__=0,i.__values__=o,n?r.__wrapped__=i:n=i;var r=i;t=t.__wrapped__}return r.__wrapped__=e,n}function Ef(){var e=this.__wrapped__;if(e instanceof B){var n=e;return this.__actions__.length&&(n=new B(this)),n=n.reverse(),n.__actions__.push({func:Ii,args:[jr],thisArg:o}),new He(n,this.__chain__)}return this.thru(jr)}function Mf(){return Ms(this.__wrapped__,this.__actions__)}var Sf=_i(function(e,n,t){N.call(e,t)?++e[t]:bn(e,t,1)});function zf(e,n,t){var i=M(e)?Da:yu;return t&&ye(e,n,t)&&(n=o),i(e,x(n,3))}function Rf(e,n){var t=M(e)?En:fs;return t(e,x(n,3))}var Lf=Us(oo),qf=Us(lo);function Bf(e,n){return he(Ci(e,n),1)}function Of(e,n){return he(Ci(e,n),ln)}function Pf(e,n,t){return t=t===o?1:S(t),he(Ci(e,n),t)}function mo(e,n){var t=M(e)?De:Rn;return t(e,x(n,3))}function po(e,n){var t=M(e)?nc:ds;return t(e,x(n,3))}var Wf=_i(function(e,n,t){N.call(e,t)?e[t].push(n):bn(e,t,[n])});function Ff(e,n,t,i){e=Ie(e)?e:ft(e),t=t&&!i?S(t):0;var r=e.length;return t<0&&(t=ae(r+t,0)),Ri(e)?t<=r&&e.indexOf(n,t)>-1:!!r&&et(e,n,t)>-1}var Uf=L(function(e,n,t){var i=-1,r=typeof n=="function",s=Ie(e)?f(e.length):[];return Rn(e,function(l){s[++i]=r?ze(n,l,t):Rt(l,n,t)}),s}),Gf=_i(function(e,n,t){bn(e,t,n)});function Ci(e,n){var t=M(e)?Q:_s;return t(e,x(n,3))}function Df(e,n,t,i){return e==null?[]:(M(n)||(n=n==null?[]:[n]),t=i?o:t,M(t)||(t=t==null?[]:[t]),xs(e,n,t))}var Nf=_i(function(e,n,t){e[t?0:1].push(n)},function(){return[[],[]]});function Hf(e,n,t){var i=M(e)?ar:ja,r=arguments.length<3;return i(e,x(n,4),t,r,Rn)}function Jf(e,n,t){var i=M(e)?tc:ja,r=arguments.length<3;return i(e,x(n,4),t,r,ds)}function jf(e,n){var t=M(e)?En:fs;return t(e,Si(x(n,3)))}function Kf(e){var n=M(e)?os:Wu;return n(e)}function Qf(e,n,t){(t?ye(e,n,t):n===o)?n=1:n=S(n);var i=M(e)?mu:Fu;return i(e,n)}function Yf(e){var n=M(e)?pu:Gu;return n(e)}function Zf(e){if(e==null)return 0;if(Ie(e))return Ri(e)?tt(e):e.length;var n=ve(e);return n==Se||n==en?e.size:Tr(e).length}function Xf(e,n,t){var i=M(e)?sr:Du;return t&&ye(e,n,t)&&(n=o),i(e,x(n,3))}var Vf=L(function(e,n){if(e==null)return[];var t=n.length;return t>1&&ye(e,n[0],n[1])?n=[]:t>2&&ye(n[0],n[1],n[2])&&(n=[n[0]]),xs(e,he(n,1),[])}),Ei=zc||function(){return fe.Date.now()};function $f(e,n){if(typeof n!="function")throw new Ne(V);return e=S(e),function(){if(--e<1)return n.apply(this,arguments)}}function vo(e,n,t){return n=t?o:n,n=e&&n==null?e.length:n,yn(e,Ue,o,o,o,o,n)}function _o(e,n){var t;if(typeof n!="function")throw new Ne(V);return e=S(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=o),t}}var Qr=L(function(e,n,t){var i=ie;if(t.length){var r=Sn(t,ut(Qr));i|=_e}return yn(e,i,n,t,r)}),bo=L(function(e,n,t){var i=ie|ge;if(t.length){var r=Sn(t,ut(bo));i|=_e}return yn(n,i,e,t,r)});function yo(e,n,t){n=t?o:n;var i=yn(e,me,o,o,o,o,o,n);return i.placeholder=yo.placeholder,i}function wo(e,n,t){n=t?o:n;var i=yn(e,ke,o,o,o,o,o,n);return i.placeholder=wo.placeholder,i}function xo(e,n,t){var i,r,s,l,c,d,m=0,p=!1,v=!1,b=!0;if(typeof e!="function")throw new Ne(V);n=Qe(n)||0,Z(t)&&(p=!!t.leading,v="maxWait"in t,s=v?ae(Qe(t.maxWait)||0,n):s,b="trailing"in t?!!t.trailing:b);function w(ee){var an=i,An=r;return i=r=o,m=ee,l=e.apply(An,an),l}function k(ee){return m=ee,c=Pt(q,n),p?w(ee):l}function R(ee){var an=ee-d,An=ee-m,Go=n-an;return v?pe(Go,s-An):Go}function T(ee){var an=ee-d,An=ee-m;return d===o||an>=n||an<0||v&&An>=s}function q(){var ee=Ei();if(T(ee))return O(ee);c=Pt(q,R(ee))}function O(ee){return c=o,b&&i?w(ee):(i=r=o,l)}function Be(){c!==o&&zs(c),m=0,i=d=r=c=o}function we(){return c===o?l:O(Ei())}function Oe(){var ee=Ei(),an=T(ee);if(i=arguments,r=this,d=ee,an){if(c===o)return k(d);if(v)return zs(c),c=Pt(q,n),w(d)}return c===o&&(c=Pt(q,n)),l}return Oe.cancel=Be,Oe.flush=we,Oe}var eh=L(function(e,n){return us(e,1,n)}),nh=L(function(e,n,t){return us(e,Qe(n)||0,t)});function th(e){return yn(e,mt)}function Mi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ne(V);var t=function(){var i=arguments,r=n?n.apply(this,i):i[0],s=t.cache;if(s.has(r))return s.get(r);var l=e.apply(this,i);return t.cache=s.set(r,l)||s,l};return t.cache=new(Mi.Cache||_n),t}Mi.Cache=_n;function Si(e){if(typeof e!="function")throw new Ne(V);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function ih(e){return _o(2,e)}var rh=Nu(function(e,n){n=n.length==1&&M(n[0])?Q(n[0],Re(x())):Q(he(n,1),Re(x()));var t=n.length;return L(function(i){for(var r=-1,s=pe(i.length,t);++r<s;)i[r]=n[r].call(this,i[r]);return ze(e,this,i)})}),Yr=L(function(e,n){var t=Sn(n,ut(Yr));return yn(e,_e,o,n,t)}),ko=L(function(e,n){var t=Sn(n,ut(ko));return yn(e,Fe,o,n,t)}),ah=wn(function(e,n){return yn(e,Te,o,o,o,n)});function sh(e,n){if(typeof e!="function")throw new Ne(V);return n=n===o?n:S(n),L(e,n)}function oh(e,n){if(typeof e!="function")throw new Ne(V);return n=n==null?0:ae(S(n),0),L(function(t){var i=t[n],r=Bn(t,0,n);return i&&Mn(r,i),ze(e,this,r)})}function lh(e,n,t){var i=!0,r=!0;if(typeof e!="function")throw new Ne(V);return Z(t)&&(i="leading"in t?!!t.leading:i,r="trailing"in t?!!t.trailing:r),xo(e,n,{leading:i,maxWait:n,trailing:r})}function ch(e){return vo(e,1)}function uh(e,n){return Yr(Lr(n),e)}function dh(){if(!arguments.length)return[];var e=arguments[0];return M(e)?e:[e]}function fh(e){return Je(e,We)}function hh(e,n){return n=typeof n=="function"?n:o,Je(e,We,n)}function gh(e){return Je(e,te|We)}function mh(e,n){return n=typeof n=="function"?n:o,Je(e,te|We,n)}function ph(e,n){return n==null||cs(e,n,oe(n))}function rn(e,n){return e===n||e!==e&&n!==n}var vh=xi(wr),_h=xi(function(e,n){return e>=n}),Kn=ms(function(){return arguments}())?ms:function(e){return X(e)&&N.call(e,"callee")&&!ns.call(e,"callee")},M=f.isArray,bh=Oa?Re(Oa):Iu;function Ie(e){return e!=null&&zi(e.length)&&!kn(e)}function $(e){return X(e)&&Ie(e)}function yh(e){return e===!0||e===!1||X(e)&&be(e)==z}var On=Lc||sa,wh=Pa?Re(Pa):Cu;function xh(e){return X(e)&&e.nodeType===1&&!Wt(e)}function kh(e){if(e==null)return!0;if(Ie(e)&&(M(e)||typeof e=="string"||typeof e.splice=="function"||On(e)||dt(e)||Kn(e)))return!e.length;var n=ve(e);if(n==Se||n==en)return!e.size;if(Ot(e))return!Tr(e).length;for(var t in e)if(N.call(e,t))return!1;return!0}function Th(e,n){return Lt(e,n)}function Ah(e,n,t){t=typeof t=="function"?t:o;var i=t?t(e,n):o;return i===o?Lt(e,n,o,t):!!i}function Zr(e){if(!X(e))return!1;var n=be(e);return n==un||n==Me||typeof e.message=="string"&&typeof e.name=="string"&&!Wt(e)}function Ih(e){return typeof e=="number"&&is(e)}function kn(e){if(!Z(e))return!1;var n=be(e);return n==Xn||n==Ht||n==I||n==Yo}function To(e){return typeof e=="number"&&e==S(e)}function zi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=cn}function Z(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function X(e){return e!=null&&typeof e=="object"}var Ao=Wa?Re(Wa):Mu;function Ch(e,n){return e===n||kr(e,n,Ur(n))}function Eh(e,n,t){return t=typeof t=="function"?t:o,kr(e,n,Ur(n),t)}function Mh(e){return Io(e)&&e!=+e}function Sh(e){if(fd(e))throw new E(In);return ps(e)}function zh(e){return e===null}function Rh(e){return e==null}function Io(e){return typeof e=="number"||X(e)&&be(e)==bt}function Wt(e){if(!X(e)||be(e)!=pn)return!1;var n=ri(e);if(n===null)return!0;var t=N.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&ei.call(t)==Cc}var Xr=Fa?Re(Fa):Su;function Lh(e){return To(e)&&e>=-cn&&e<=cn}var Co=Ua?Re(Ua):zu;function Ri(e){return typeof e=="string"||!M(e)&&X(e)&&be(e)==wt}function qe(e){return typeof e=="symbol"||X(e)&&be(e)==Jt}var dt=Ga?Re(Ga):Ru;function qh(e){return e===o}function Bh(e){return X(e)&&ve(e)==xt}function Oh(e){return X(e)&&be(e)==Xo}var Ph=xi(Ar),Wh=xi(function(e,n){return e<=n});function Eo(e){if(!e)return[];if(Ie(e))return Ri(e)?nn(e):Ae(e);if(At&&e[At])return mc(e[At]());var n=ve(e),t=n==Se?fr:n==en?Xt:ft;return t(e)}function Tn(e){if(!e)return e===0?e:0;if(e=Qe(e),e===ln||e===-ln){var n=e<0?-1:1;return n*Wi}return e===e?e:0}function S(e){var n=Tn(e),t=n%1;return n===n?t?n-t:n:0}function Mo(e){return e?Nn(S(e),0,de):0}function Qe(e){if(typeof e=="number")return e;if(qe(e))return Zn;if(Z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ka(e);var t=_l.test(e);return t||yl.test(e)?Vl(e.slice(2),t?2:8):vl.test(e)?Zn:+e}function So(e){return fn(e,Ce(e))}function Fh(e){return e?Nn(S(e),-cn,cn):e===0?e:0}function D(e){return e==null?"":Le(e)}var Uh=lt(function(e,n){if(Ot(n)||Ie(n)){fn(n,oe(n),e);return}for(var t in n)N.call(n,t)&&St(e,t,n[t])}),zo=lt(function(e,n){fn(n,Ce(n),e)}),Li=lt(function(e,n,t,i){fn(n,Ce(n),e,i)}),Gh=lt(function(e,n,t,i){fn(n,oe(n),e,i)}),Dh=wn(_r);function Nh(e,n){var t=ot(e);return n==null?t:ls(t,n)}var Hh=L(function(e,n){e=H(e);var t=-1,i=n.length,r=i>2?n[2]:o;for(r&&ye(n[0],n[1],r)&&(i=1);++t<i;)for(var s=n[t],l=Ce(s),c=-1,d=l.length;++c<d;){var m=l[c],p=e[m];(p===o||rn(p,rt[m])&&!N.call(e,m))&&(e[m]=s[m])}return e}),Jh=L(function(e){return e.push(o,Ks),ze(Ro,o,e)});function jh(e,n){return Na(e,x(n,3),dn)}function Kh(e,n){return Na(e,x(n,3),yr)}function Qh(e,n){return e==null?e:br(e,x(n,3),Ce)}function Yh(e,n){return e==null?e:hs(e,x(n,3),Ce)}function Zh(e,n){return e&&dn(e,x(n,3))}function Xh(e,n){return e&&yr(e,x(n,3))}function Vh(e){return e==null?[]:gi(e,oe(e))}function $h(e){return e==null?[]:gi(e,Ce(e))}function Vr(e,n,t){var i=e==null?o:Hn(e,n);return i===o?t:i}function eg(e,n){return e!=null&&Zs(e,n,xu)}function $r(e,n){return e!=null&&Zs(e,n,ku)}var ng=Ds(function(e,n,t){n!=null&&typeof n.toString!="function"&&(n=ni.call(n)),e[n]=t},na(Ee)),tg=Ds(function(e,n,t){n!=null&&typeof n.toString!="function"&&(n=ni.call(n)),N.call(e,n)?e[n].push(t):e[n]=[t]},x),ig=L(Rt);function oe(e){return Ie(e)?ss(e):Tr(e)}function Ce(e){return Ie(e)?ss(e,!0):Lu(e)}function rg(e,n){var t={};return n=x(n,3),dn(e,function(i,r,s){bn(t,n(i,r,s),i)}),t}function ag(e,n){var t={};return n=x(n,3),dn(e,function(i,r,s){bn(t,r,n(i,r,s))}),t}var sg=lt(function(e,n,t){mi(e,n,t)}),Ro=lt(function(e,n,t,i){mi(e,n,t,i)}),og=wn(function(e,n){var t={};if(e==null)return t;var i=!1;n=Q(n,function(s){return s=qn(s,e),i||(i=s.length>1),s}),fn(e,Wr(e),t),i&&(t=Je(t,te|gn|We,ed));for(var r=n.length;r--;)Sr(t,n[r]);return t});function lg(e,n){return Lo(e,Si(x(n)))}var cg=wn(function(e,n){return e==null?{}:Bu(e,n)});function Lo(e,n){if(e==null)return{};var t=Q(Wr(e),function(i){return[i]});return n=x(n),ks(e,t,function(i,r){return n(i,r[0])})}function ug(e,n,t){n=qn(n,e);var i=-1,r=n.length;for(r||(r=1,e=o);++i<r;){var s=e==null?o:e[hn(n[i])];s===o&&(i=r,s=t),e=kn(s)?s.call(e):s}return e}function dg(e,n,t){return e==null?e:qt(e,n,t)}function fg(e,n,t,i){return i=typeof i=="function"?i:o,e==null?e:qt(e,n,t,i)}var qo=Js(oe),Bo=Js(Ce);function hg(e,n,t){var i=M(e),r=i||On(e)||dt(e);if(n=x(n,4),t==null){var s=e&&e.constructor;r?t=i?new s:[]:Z(e)?t=kn(s)?ot(ri(e)):{}:t={}}return(r?De:dn)(e,function(l,c,d){return n(t,l,c,d)}),t}function gg(e,n){return e==null?!0:Sr(e,n)}function mg(e,n,t){return e==null?e:Es(e,n,Lr(t))}function pg(e,n,t,i){return i=typeof i=="function"?i:o,e==null?e:Es(e,n,Lr(t),i)}function ft(e){return e==null?[]:dr(e,oe(e))}function vg(e){return e==null?[]:dr(e,Ce(e))}function _g(e,n,t){return t===o&&(t=n,n=o),t!==o&&(t=Qe(t),t=t===t?t:0),n!==o&&(n=Qe(n),n=n===n?n:0),Nn(Qe(e),n,t)}function bg(e,n,t){return n=Tn(n),t===o?(t=n,n=0):t=Tn(t),e=Qe(e),Tu(e,n,t)}function yg(e,n,t){if(t&&typeof t!="boolean"&&ye(e,n,t)&&(n=t=o),t===o&&(typeof n=="boolean"?(t=n,n=o):typeof e=="boolean"&&(t=e,e=o)),e===o&&n===o?(e=0,n=1):(e=Tn(e),n===o?(n=e,e=0):n=Tn(n)),e>n){var i=e;e=n,n=i}if(t||e%1||n%1){var r=rs();return pe(e+r*(n-e+Xl("1e-"+((r+"").length-1))),n)}return Cr(e,n)}var wg=ct(function(e,n,t){return n=n.toLowerCase(),e+(t?Oo(n):n)});function Oo(e){return ea(D(e).toLowerCase())}function Po(e){return e=D(e),e&&e.replace(xl,uc).replace(Gl,"")}function xg(e,n,t){e=D(e),n=Le(n);var i=e.length;t=t===o?i:Nn(S(t),0,i);var r=t;return t-=n.length,t>=0&&e.slice(t,r)==n}function kg(e){return e=D(e),e&&tl.test(e)?e.replace(ha,dc):e}function Tg(e){return e=D(e),e&&ll.test(e)?e.replace(Yi,"\\$&"):e}var Ag=ct(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()}),Ig=ct(function(e,n,t){return e+(t?" ":"")+n.toLowerCase()}),Cg=Fs("toLowerCase");function Eg(e,n,t){e=D(e),n=S(n);var i=n?tt(e):0;if(!n||i>=n)return e;var r=(n-i)/2;return wi(li(r),t)+e+wi(oi(r),t)}function Mg(e,n,t){e=D(e),n=S(n);var i=n?tt(e):0;return n&&i<n?e+wi(n-i,t):e}function Sg(e,n,t){e=D(e),n=S(n);var i=n?tt(e):0;return n&&i<n?wi(n-i,t)+e:e}function zg(e,n,t){return t||n==null?n=0:n&&(n=+n),Pc(D(e).replace(Zi,""),n||0)}function Rg(e,n,t){return(t?ye(e,n,t):n===o)?n=1:n=S(n),Er(D(e),n)}function Lg(){var e=arguments,n=D(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var qg=ct(function(e,n,t){return e+(t?"_":"")+n.toLowerCase()});function Bg(e,n,t){return t&&typeof t!="number"&&ye(e,n,t)&&(n=t=o),t=t===o?de:t>>>0,t?(e=D(e),e&&(typeof n=="string"||n!=null&&!Xr(n))&&(n=Le(n),!n&&nt(e))?Bn(nn(e),0,t):e.split(n,t)):[]}var Og=ct(function(e,n,t){return e+(t?" ":"")+ea(n)});function Pg(e,n,t){return e=D(e),t=t==null?0:Nn(S(t),0,e.length),n=Le(n),e.slice(t,t+n.length)==n}function Wg(e,n,t){var i=a.templateSettings;t&&ye(e,n,t)&&(n=o),e=D(e),n=Li({},n,i,js);var r=Li({},n.imports,i.imports,js),s=oe(r),l=dr(r,s),c,d,m=0,p=n.interpolate||jt,v="__p += '",b=hr((n.escape||jt).source+"|"+p.source+"|"+(p===ga?pl:jt).source+"|"+(n.evaluate||jt).source+"|$","g"),w="//# sourceURL="+(N.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jl+"]")+`
`;e.replace(b,function(T,q,O,Be,we,Oe){return O||(O=Be),v+=e.slice(m,Oe).replace(kl,fc),q&&(c=!0,v+=`' +
__e(`+q+`) +
'`),we&&(d=!0,v+=`';
`+we+`;
__p += '`),O&&(v+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),m=Oe+T.length,T}),v+=`';
`;var k=N.call(n,"variable")&&n.variable;if(!k)v=`with (obj) {
`+v+`
}
`;else if(gl.test(k))throw new E(_);v=(d?v.replace(Vo,""):v).replace($o,"$1").replace(el,"$1;"),v="function("+(k||"obj")+`) {
`+(k?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(d?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+v+`return __p
}`;var R=Fo(function(){return U(s,w+"return "+v).apply(o,l)});if(R.source=v,Zr(R))throw R;return R}function Fg(e){return D(e).toLowerCase()}function Ug(e){return D(e).toUpperCase()}function Gg(e,n,t){if(e=D(e),e&&(t||n===o))return Ka(e);if(!e||!(n=Le(n)))return e;var i=nn(e),r=nn(n),s=Qa(i,r),l=Ya(i,r)+1;return Bn(i,s,l).join("")}function Dg(e,n,t){if(e=D(e),e&&(t||n===o))return e.slice(0,Xa(e)+1);if(!e||!(n=Le(n)))return e;var i=nn(e),r=Ya(i,nn(n))+1;return Bn(i,0,r).join("")}function Ng(e,n,t){if(e=D(e),e&&(t||n===o))return e.replace(Zi,"");if(!e||!(n=Le(n)))return e;var i=nn(e),r=Qa(i,nn(n));return Bn(i,r).join("")}function Hg(e,n){var t=pt,i=Cn;if(Z(n)){var r="separator"in n?n.separator:r;t="length"in n?S(n.length):t,i="omission"in n?Le(n.omission):i}e=D(e);var s=e.length;if(nt(e)){var l=nn(e);s=l.length}if(t>=s)return e;var c=t-tt(i);if(c<1)return i;var d=l?Bn(l,0,c).join(""):e.slice(0,c);if(r===o)return d+i;if(l&&(c+=d.length-c),Xr(r)){if(e.slice(c).search(r)){var m,p=d;for(r.global||(r=hr(r.source,D(ma.exec(r))+"g")),r.lastIndex=0;m=r.exec(p);)var v=m.index;d=d.slice(0,v===o?c:v)}}else if(e.indexOf(Le(r),c)!=c){var b=d.lastIndexOf(r);b>-1&&(d=d.slice(0,b))}return d+i}function Jg(e){return e=D(e),e&&nl.test(e)?e.replace(fa,bc):e}var jg=ct(function(e,n,t){return e+(t?" ":"")+n.toUpperCase()}),ea=Fs("toUpperCase");function Wo(e,n,t){return e=D(e),n=t?o:n,n===o?gc(e)?xc(e):ac(e):e.match(n)||[]}var Fo=L(function(e,n){try{return ze(e,o,n)}catch(t){return Zr(t)?t:new E(t)}}),Kg=wn(function(e,n){return De(n,function(t){t=hn(t),bn(e,t,Qr(e[t],e))}),e});function Qg(e){var n=e==null?0:e.length,t=x();return e=n?Q(e,function(i){if(typeof i[1]!="function")throw new Ne(V);return[t(i[0]),i[1]]}):[],L(function(i){for(var r=-1;++r<n;){var s=e[r];if(ze(s[0],this,i))return ze(s[1],this,i)}})}function Yg(e){return bu(Je(e,te))}function na(e){return function(){return e}}function Zg(e,n){return e==null||e!==e?n:e}var Xg=Gs(),Vg=Gs(!0);function Ee(e){return e}function ta(e){return vs(typeof e=="function"?e:Je(e,te))}function $g(e){return bs(Je(e,te))}function em(e,n){return ys(e,Je(n,te))}var nm=L(function(e,n){return function(t){return Rt(t,e,n)}}),tm=L(function(e,n){return function(t){return Rt(e,t,n)}});function ia(e,n,t){var i=oe(n),r=gi(n,i);t==null&&!(Z(n)&&(r.length||!i.length))&&(t=n,n=e,e=this,r=gi(n,oe(n)));var s=!(Z(t)&&"chain"in t)||!!t.chain,l=kn(e);return De(r,function(c){var d=n[c];e[c]=d,l&&(e.prototype[c]=function(){var m=this.__chain__;if(s||m){var p=e(this.__wrapped__),v=p.__actions__=Ae(this.__actions__);return v.push({func:d,args:arguments,thisArg:e}),p.__chain__=m,p}return d.apply(e,Mn([this.value()],arguments))})}),e}function im(){return fe._===this&&(fe._=Ec),this}function ra(){}function rm(e){return e=S(e),L(function(n){return ws(n,e)})}var am=Br(Q),sm=Br(Da),om=Br(sr);function Uo(e){return Dr(e)?or(hn(e)):Ou(e)}function lm(e){return function(n){return e==null?o:Hn(e,n)}}var cm=Ns(),um=Ns(!0);function aa(){return[]}function sa(){return!1}function dm(){return{}}function fm(){return""}function hm(){return!0}function gm(e,n){if(e=S(e),e<1||e>cn)return[];var t=de,i=pe(e,de);n=x(n),e-=de;for(var r=ur(i,n);++t<e;)n(t);return r}function mm(e){return M(e)?Q(e,hn):qe(e)?[e]:Ae(ao(D(e)))}function pm(e){var n=++Ic;return D(e)+n}var vm=yi(function(e,n){return e+n},0),_m=Or("ceil"),bm=yi(function(e,n){return e/n},1),ym=Or("floor");function wm(e){return e&&e.length?hi(e,Ee,wr):o}function xm(e,n){return e&&e.length?hi(e,x(n,2),wr):o}function km(e){return Ja(e,Ee)}function Tm(e,n){return Ja(e,x(n,2))}function Am(e){return e&&e.length?hi(e,Ee,Ar):o}function Im(e,n){return e&&e.length?hi(e,x(n,2),Ar):o}var Cm=yi(function(e,n){return e*n},1),Em=Or("round"),Mm=yi(function(e,n){return e-n},0);function Sm(e){return e&&e.length?cr(e,Ee):0}function zm(e,n){return e&&e.length?cr(e,x(n,2)):0}return a.after=$f,a.ary=vo,a.assign=Uh,a.assignIn=zo,a.assignInWith=Li,a.assignWith=Gh,a.at=Dh,a.before=_o,a.bind=Qr,a.bindAll=Kg,a.bindKey=bo,a.castArray=dh,a.chain=go,a.chunk=bd,a.compact=yd,a.concat=wd,a.cond=Qg,a.conforms=Yg,a.constant=na,a.countBy=Sf,a.create=Nh,a.curry=yo,a.curryRight=wo,a.debounce=xo,a.defaults=Hh,a.defaultsDeep=Jh,a.defer=eh,a.delay=nh,a.difference=xd,a.differenceBy=kd,a.differenceWith=Td,a.drop=Ad,a.dropRight=Id,a.dropRightWhile=Cd,a.dropWhile=Ed,a.fill=Md,a.filter=Rf,a.flatMap=Bf,a.flatMapDeep=Of,a.flatMapDepth=Pf,a.flatten=co,a.flattenDeep=Sd,a.flattenDepth=zd,a.flip=th,a.flow=Xg,a.flowRight=Vg,a.fromPairs=Rd,a.functions=Vh,a.functionsIn=$h,a.groupBy=Wf,a.initial=qd,a.intersection=Bd,a.intersectionBy=Od,a.intersectionWith=Pd,a.invert=ng,a.invertBy=tg,a.invokeMap=Uf,a.iteratee=ta,a.keyBy=Gf,a.keys=oe,a.keysIn=Ce,a.map=Ci,a.mapKeys=rg,a.mapValues=ag,a.matches=$g,a.matchesProperty=em,a.memoize=Mi,a.merge=sg,a.mergeWith=Ro,a.method=nm,a.methodOf=tm,a.mixin=ia,a.negate=Si,a.nthArg=rm,a.omit=og,a.omitBy=lg,a.once=ih,a.orderBy=Df,a.over=am,a.overArgs=rh,a.overEvery=sm,a.overSome=om,a.partial=Yr,a.partialRight=ko,a.partition=Nf,a.pick=cg,a.pickBy=Lo,a.property=Uo,a.propertyOf=lm,a.pull=Gd,a.pullAll=fo,a.pullAllBy=Dd,a.pullAllWith=Nd,a.pullAt=Hd,a.range=cm,a.rangeRight=um,a.rearg=ah,a.reject=jf,a.remove=Jd,a.rest=sh,a.reverse=jr,a.sampleSize=Qf,a.set=dg,a.setWith=fg,a.shuffle=Yf,a.slice=jd,a.sortBy=Vf,a.sortedUniq=$d,a.sortedUniqBy=ef,a.split=Bg,a.spread=oh,a.tail=nf,a.take=tf,a.takeRight=rf,a.takeRightWhile=af,a.takeWhile=sf,a.tap=wf,a.throttle=lh,a.thru=Ii,a.toArray=Eo,a.toPairs=qo,a.toPairsIn=Bo,a.toPath=mm,a.toPlainObject=So,a.transform=hg,a.unary=ch,a.union=of,a.unionBy=lf,a.unionWith=cf,a.uniq=uf,a.uniqBy=df,a.uniqWith=ff,a.unset=gg,a.unzip=Kr,a.unzipWith=ho,a.update=mg,a.updateWith=pg,a.values=ft,a.valuesIn=vg,a.without=hf,a.words=Wo,a.wrap=uh,a.xor=gf,a.xorBy=mf,a.xorWith=pf,a.zip=vf,a.zipObject=_f,a.zipObjectDeep=bf,a.zipWith=yf,a.entries=qo,a.entriesIn=Bo,a.extend=zo,a.extendWith=Li,ia(a,a),a.add=vm,a.attempt=Fo,a.camelCase=wg,a.capitalize=Oo,a.ceil=_m,a.clamp=_g,a.clone=fh,a.cloneDeep=gh,a.cloneDeepWith=mh,a.cloneWith=hh,a.conformsTo=ph,a.deburr=Po,a.defaultTo=Zg,a.divide=bm,a.endsWith=xg,a.eq=rn,a.escape=kg,a.escapeRegExp=Tg,a.every=zf,a.find=Lf,a.findIndex=oo,a.findKey=jh,a.findLast=qf,a.findLastIndex=lo,a.findLastKey=Kh,a.floor=ym,a.forEach=mo,a.forEachRight=po,a.forIn=Qh,a.forInRight=Yh,a.forOwn=Zh,a.forOwnRight=Xh,a.get=Vr,a.gt=vh,a.gte=_h,a.has=eg,a.hasIn=$r,a.head=uo,a.identity=Ee,a.includes=Ff,a.indexOf=Ld,a.inRange=bg,a.invoke=ig,a.isArguments=Kn,a.isArray=M,a.isArrayBuffer=bh,a.isArrayLike=Ie,a.isArrayLikeObject=$,a.isBoolean=yh,a.isBuffer=On,a.isDate=wh,a.isElement=xh,a.isEmpty=kh,a.isEqual=Th,a.isEqualWith=Ah,a.isError=Zr,a.isFinite=Ih,a.isFunction=kn,a.isInteger=To,a.isLength=zi,a.isMap=Ao,a.isMatch=Ch,a.isMatchWith=Eh,a.isNaN=Mh,a.isNative=Sh,a.isNil=Rh,a.isNull=zh,a.isNumber=Io,a.isObject=Z,a.isObjectLike=X,a.isPlainObject=Wt,a.isRegExp=Xr,a.isSafeInteger=Lh,a.isSet=Co,a.isString=Ri,a.isSymbol=qe,a.isTypedArray=dt,a.isUndefined=qh,a.isWeakMap=Bh,a.isWeakSet=Oh,a.join=Wd,a.kebabCase=Ag,a.last=Ke,a.lastIndexOf=Fd,a.lowerCase=Ig,a.lowerFirst=Cg,a.lt=Ph,a.lte=Wh,a.max=wm,a.maxBy=xm,a.mean=km,a.meanBy=Tm,a.min=Am,a.minBy=Im,a.stubArray=aa,a.stubFalse=sa,a.stubObject=dm,a.stubString=fm,a.stubTrue=hm,a.multiply=Cm,a.nth=Ud,a.noConflict=im,a.noop=ra,a.now=Ei,a.pad=Eg,a.padEnd=Mg,a.padStart=Sg,a.parseInt=zg,a.random=yg,a.reduce=Hf,a.reduceRight=Jf,a.repeat=Rg,a.replace=Lg,a.result=ug,a.round=Em,a.runInContext=u,a.sample=Kf,a.size=Zf,a.snakeCase=qg,a.some=Xf,a.sortedIndex=Kd,a.sortedIndexBy=Qd,a.sortedIndexOf=Yd,a.sortedLastIndex=Zd,a.sortedLastIndexBy=Xd,a.sortedLastIndexOf=Vd,a.startCase=Og,a.startsWith=Pg,a.subtract=Mm,a.sum=Sm,a.sumBy=zm,a.template=Wg,a.times=gm,a.toFinite=Tn,a.toInteger=S,a.toLength=Mo,a.toLower=Fg,a.toNumber=Qe,a.toSafeInteger=Fh,a.toString=D,a.toUpper=Ug,a.trim=Gg,a.trimEnd=Dg,a.trimStart=Ng,a.truncate=Hg,a.unescape=Jg,a.uniqueId=pm,a.upperCase=jg,a.upperFirst=ea,a.each=mo,a.eachRight=po,a.first=uo,ia(a,function(){var e={};return dn(a,function(n,t){N.call(a.prototype,t)||(e[t]=n)}),e}(),{chain:!1}),a.VERSION=g,De(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){a[e].placeholder=a}),De(["drop","take"],function(e,n){B.prototype[e]=function(t){t=t===o?1:ae(S(t),0);var i=this.__filtered__&&!n?new B(this):this.clone();return i.__filtered__?i.__takeCount__=pe(t,i.__takeCount__):i.__views__.push({size:pe(t,de),type:e+(i.__dir__<0?"Right":"")}),i},B.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),De(["filter","map","takeWhile"],function(e,n){var t=n+1,i=t==Yn||t==Pi;B.prototype[e]=function(r){var s=this.clone();return s.__iteratees__.push({iteratee:x(r,3),type:t}),s.__filtered__=s.__filtered__||i,s}}),De(["head","last"],function(e,n){var t="take"+(n?"Right":"");B.prototype[e]=function(){return this[t](1).value()[0]}}),De(["initial","tail"],function(e,n){var t="drop"+(n?"":"Right");B.prototype[e]=function(){return this.__filtered__?new B(this):this[t](1)}}),B.prototype.compact=function(){return this.filter(Ee)},B.prototype.find=function(e){return this.filter(e).head()},B.prototype.findLast=function(e){return this.reverse().find(e)},B.prototype.invokeMap=L(function(e,n){return typeof e=="function"?new B(this):this.map(function(t){return Rt(t,e,n)})}),B.prototype.reject=function(e){return this.filter(Si(x(e)))},B.prototype.slice=function(e,n){e=S(e);var t=this;return t.__filtered__&&(e>0||n<0)?new B(t):(e<0?t=t.takeRight(-e):e&&(t=t.drop(e)),n!==o&&(n=S(n),t=n<0?t.dropRight(-n):t.take(n-e)),t)},B.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},B.prototype.toArray=function(){return this.take(de)},dn(B.prototype,function(e,n){var t=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),r=a[i?"take"+(n=="last"?"Right":""):n],s=i||/^find/.test(n);r&&(a.prototype[n]=function(){var l=this.__wrapped__,c=i?[1]:arguments,d=l instanceof B,m=c[0],p=d||M(l),v=function(q){var O=r.apply(a,Mn([q],c));return i&&b?O[0]:O};p&&t&&typeof m=="function"&&m.length!=1&&(d=p=!1);var b=this.__chain__,w=!!this.__actions__.length,k=s&&!b,R=d&&!w;if(!s&&p){l=R?l:new B(this);var T=e.apply(l,c);return T.__actions__.push({func:Ii,args:[v],thisArg:o}),new He(T,b)}return k&&R?e.apply(this,c):(T=this.thru(v),k?i?T.value()[0]:T.value():T)})}),De(["pop","push","shift","sort","splice","unshift"],function(e){var n=Vt[e],t=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);a.prototype[e]=function(){var r=arguments;if(i&&!this.__chain__){var s=this.value();return n.apply(M(s)?s:[],r)}return this[t](function(l){return n.apply(M(l)?l:[],r)})}}),dn(B.prototype,function(e,n){var t=a[n];if(t){var i=t.name+"";N.call(st,i)||(st[i]=[]),st[i].push({name:n,func:t})}}),st[bi(o,ge).name]=[{name:"wrapper",func:o}],B.prototype.clone=Hc,B.prototype.reverse=Jc,B.prototype.value=jc,a.prototype.at=xf,a.prototype.chain=kf,a.prototype.commit=Tf,a.prototype.next=Af,a.prototype.plant=Cf,a.prototype.reverse=Ef,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Mf,a.prototype.first=a.prototype.head,At&&(a.prototype[At]=If),a},it=kc();Fn?((Fn.exports=it)._=it,tr._=it):fe._=it}).call(Ft)})(Bi,Bi.exports);var Lp=Bi.exports;const qp=Om(Lp),Bp=Pm({__name:"ModelsPage",setup(Xe,{expose:j}){j();const o=Wm(),g=fp(),{settings:on}=Do(o),{featuredBlogs:In,authors:V,translatedAllBlogs:_,accessedAt:F,lastAccessedAt:Ve,initiating:$e}=Do(g),te=Pe(""),gn=Pe(""),We=Pe(!1),ce=Pe(null),ue=Pe(!1),ie=Pe("release_date"),ge=Pe("desc"),se=Pe(null),{models:me}=Rp(),ke=Pe([]),_e=Pe(!1),Fe=Hm(),Ue=Jm(),{t:Te}=Fm({useScope:"global"}),mt=jm(),pt=Pe(!1),Cn=Pe(!0),Oi=Ut(()=>Cn.value),vt=()=>{const I=me.value.slice();if(!te.value)ke.value=I;else{const z=te.value.toLowerCase().trim();ue.value=!0,ke.value=I.filter(G=>{const Me=G.name.toLowerCase(),un=G.metadata.tags||[],Xn=(G.metadata.model_type||"").toLowerCase(),Ht=(G.metadata.organization||"").toLowerCase();return Me.includes(z)||un.some(Se=>Se.toLowerCase().includes(z))||Xn.includes(z)||Ht.includes(z)}),ue.value=!1}ke.value.sort((z,G)=>{let Me=0;switch(ie.value){case"name":Me=z.name.localeCompare(G.name);break;case"release_date":Me=new Date(z.metadata.release_date||"0").valueOf()-new Date(G.metadata.release_date||"0").valueOf();break;case"parameter_size":Me=_t(z.metadata.parameter_size||"0")-_t(G.metadata.parameter_size||"0");break}return ge.value==="asc"?Me:-Me})},Yn=qp.debounce(()=>{vt()},300);No(me,I=>{I&&I.length>0&&!_e.value&&(ke.value=I.slice(),_e.value=!0,oa(()=>{vt()}))},{immediate:!0}),No([ie,ge],()=>{_e.value&&ke.value.length>0&&oa(()=>{Yn()})},{deep:!0});const _t=I=>{if(!I)return 0;const z=I.toUpperCase(),G=parseFloat(z);return isNaN(G)?0:z.endsWith("B")?G*1e9:z.endsWith("M")?G*1e6:G},Pi=Ut(()=>Dt.value.filter(I=>{var z,G;return(G=(z=se.value)==null?void 0:z.metadata.availability)==null?void 0:G.includes(I.key)})),ln=["parameter_size","token_length","image_size","output_dimension"],cn=Ut(()=>{var I;return(I=se.value)!=null&&I.metadata?ln.filter(z=>se.value.metadata[z]).map(z=>({key:z,value:se.value.metadata[z]})):[]}),Wi=I=>{var z;return I==="en"?Te("tokenizer.english"):I==="zh"?Te("tokenizer.chinese"):I==="multilingual"?Te("embedding.multilingual"):(z=on.value.localeOptions.find(G=>G.value===I))==null?void 0:z.label},Zn=I=>{ie.value=I,Yn()},de=Ut(()=>{var I;return(I=se.value)==null?void 0:I.metadata.model_name}),Dt=Ut(()=>[{type:"license_link",icon:"img:/J.svg",key:"license",link:"/api-dashboard/license-config?login=true"},{type:"api_link",icon:"img:/J.svg",key:"api",link:`/?sui&model=${de.value}`},{type:"aws_link",icon:`img:${Km}`,key:"aws",link:"https://aws.amazon.com/marketplace/seller-profile?id=seller-stch2ludm6vgy"},{type:"azure_link",icon:`img:${Qm}`,key:"azure",link:"https://azuremarketplace.microsoft.com/en-US/marketplace/apps?page=1&search=jina"},{type:"gcp_link",icon:`img:${Ym}`,key:"gcp",link:"https://console.cloud.google.com/marketplace/browse?q=jina"},{type:"huggingface_link",icon:"img:/huggingface_logo.svg",key:"huggingface",link:`https://huggingface.co/jinaai/${de.value}`}]),Nt=async I=>{if(!(gn.value===I&&se.value))try{We.value=!0,ce.value=null,gn.value=I;const z=me.value.find(G=>G.slug===I);if(!z)throw new Error(`Model "${I}" not found`);await oa(),se.value=z,Fe.params.slug!==I&&Ue.push(`/models/${I}`)}catch(z){ce.value=z instanceof Error?z.message:"Failed to load model",se.value=null}finally{We.value=!1}},Fi=I=>({"margin-top":`${I}px`});Ho(()=>{const I=Fe.params.slug!==void 0;I&&Cn.value?(pt.value=!0,setTimeout(()=>{Cn.value=!1,pt.value=!1},500)):!I&&!Cn.value&&(Cn.value=!0)});const mn=()=>{let I=Te("model_graph.title"),z=Te("model_graph.description"),G="https://jina.ai/banner-models.png",Me="Jina AI",un="https://jina.ai/models";Fe.name==="model-detail"&&se.value&&(I=Te("models.title",{_modelName:de.value}),z=Te(`embedding.${de.value.replace(".","")}_description`),G=`https://jina.ai/models-banner/${de.value}.png`,Me=se.value.metadata.organization,un=`https://jina.ai/models/${se.value.slug}`),Zm({title:I,meta:[{name:"title",content:I},{name:"description",content:z},{name:"author",content:Me},{property:"og:title",content:I},{property:"og:url",content:un},{property:"og:image",content:G},{property:"og:description",content:z},{property:"twitter:title",content:I},{property:"twitter:url",content:un},{property:"twitter:image",content:G},{property:"twitter:description",content:z},{property:"twitter:label1",content:"Created by"},{property:"twitter:data1",content:Me}]})};Ho(()=>{const I=Fe.params.slug;I&&Nt(I),mn()}),Ko(()=>{ke.value=me.value.slice()});const Wn={userStore:o,newsStore:g,settings:on,featuredBlogs:In,authors:V,translatedAllBlogs:_,accessedAt:F,lastAccessedAt:Ve,initiating:$e,searchQuery:te,currentSlug:gn,isLoading:We,error:ce,isSearching:ue,sortOption:ie,sortDirection:ge,selectedModel:se,models:me,filteredModels:ke,isInitialized:_e,route:Fe,router:Ue,t:Te,$q:mt,isTransitioning:pt,shouldShowGraph:Cn,showModelGraph:Oi,applySearchAndSort:vt,debouncedApplySearchAndSort:Yn,parseParameterSize:_t,availableExternalLinks:Pi,MODEL_DETAIL_KEYS:ln,modelDetails:cn,mapLangCodeToLanguageName:Wi,setSortOption:Zn,selectModelName:de,externalLinks:Dt,selectModel:Nt,getStyle:Fi,initHead:mn,get langcode2SingleEmoji(){return op},get ccncOptions(){return Um},get embeddingIcon(){return Gm},get rerankerIcon(){return Dm},get readerIcon(){return Nm},EmbeddingGraph:lp,H2TitleBlock:cp,ResearchersComponent:up,NewsFilterComponent:dp};return Object.defineProperty(Wn,"__isScriptSetup",{enumerable:!1,value:!0}),Wn}}),Op={key:"graph",class:"q-pa-xl row justify-center overflow-hidden q-mb-xl"},Pp={class:"col-12 col-sm-11 col-md-10",style:{"z-index":"1"}},Wp={class:"col-11 col-md-3 col-xl-2 q-pa-md models-sidebar"},Fp={class:"row q-gutter-sm items-center q-mb-md"},Up={key:1,class:"text-center q-pa-md text-grey-7"},Gp={class:"col-10 col-md-8 col-lg-7 col-xl-6 q-pa-md"},Dp={key:0,class:"text-center q-pa-xl"},Np={class:"text-dim q-mt-sm"},Hp={key:1,class:"text-center q-pa-xl"},Jp={class:"text-negative q-mt-sm"},jp={class:"row justify-between"},Kp={class:"model-title"},Qp={class:"row justify-between items-center"},Yp={class:"col q-mr-md"},Zp={class:"row items-center"},Xp={class:"text-caption text-dim q-mr-sm"},Vp={class:"row items-center"},$p={class:"text-caption text-dim q-mr-sm"},ev={class:"row items-center"},nv={class:"text-caption text-dim q-mr-sm"},tv={key:0,class:"row items-center"},iv={class:"text-caption text-dim q-mr-sm"},rv={key:1,class:"row items-center"},av={class:"text-caption text-dim q-mr-sm"},sv={class:"row items-center"},ov={class:"text-caption text-dim q-mr-sm"},lv={class:"col-12 text-caption text-dim q-mr-sm"},cv={class:"text-r-h4 q-mt-xl q-mb-md"},uv={key:3,class:"text-center q-pa-xl q-ma-xl text-dim"};function dv(Xe,j,o,g,on,In){const V=np("q-markdown");return P(),ne(sp,{class:"no-wrap","style-fn":g.getStyle},{default:A(()=>[C(Jo,{appear:"",mode:"out-in",name:"page-transition"},{default:A(()=>[g.showModelGraph&&!g.isTransitioning?(P(),xe("div",Op,[Y("div",Pp,[C(g.H2TitleBlock,{title:"model_graph.title",anchor:"models",subtitle:"model_graph.description"}),C(g.EmbeddingGraph)])])):Ye("",!0),Y("div",{key:"catalog",class:ca(g.$q.screen.lt.md?"column is-vertical row":"row justify-center"),id:"catalog"},[Y("div",Wp,[Y("div",Fp,[C(Vm,{modelValue:g.searchQuery,"onUpdate:modelValue":[j[5]||(j[5]=_=>g.searchQuery=_),g.applySearchAndSort],filled:"",square:"",loading:g.isSearching,placeholder:g.t("models.search.placeholder"),class:"col",clearable:"",debounce:"300"},{prepend:A(()=>[C(Ze,{name:"search"})]),after:A(()=>[C(rp,{stretch:"",flat:"",square:"",label:g.t(`models.sort.${g.sortOption}`),"no-caps":"","no-wrap":""},{default:A(()=>[C(jo,null,{default:A(()=>[C(ua,{header:""},{default:A(()=>[le(W(g.t("models.sort.label")),1)]),_:1}),C(ht,{clickable:"",onClick:j[0]||(j[0]=_=>g.setSortOption("name")),active:g.sortOption==="name"},{default:A(()=>[C(sn,null,{default:A(()=>[le(W(g.t("models.sort.name")),1)]),_:1}),g.sortOption==="name"?(P(),ne(sn,{key:0,side:""},{default:A(()=>[C(Ze,{name:"check"})]),_:1})):Ye("",!0)]),_:1},8,["active"]),C(ht,{clickable:"",onClick:j[1]||(j[1]=_=>g.setSortOption("release_date")),active:g.sortOption==="release_date"},{default:A(()=>[C(sn,null,{default:A(()=>[le(W(g.t("models.sort.release_date")),1)]),_:1}),g.sortOption==="release_date"?(P(),ne(sn,{key:0,side:""},{default:A(()=>[C(Ze,{name:"check"})]),_:1})):Ye("",!0)]),_:1},8,["active"]),C(ht,{clickable:"",onClick:j[2]||(j[2]=_=>g.setSortOption("parameter_size")),active:g.sortOption==="parameter_size"},{default:A(()=>[C(sn,null,{default:A(()=>[le(W(g.t("models.sort.parameter_size")),1)]),_:1}),g.sortOption==="parameter_size"?(P(),ne(sn,{key:0,side:""},{default:A(()=>[C(Ze,{name:"check"})]),_:1})):Ye("",!0)]),_:1},8,["active"]),C($m),C(ua,{header:""},{default:A(()=>[le(W(g.t("models.sort.direction.name")),1)]),_:1}),C(ht,{clickable:"",onClick:j[3]||(j[3]=_=>g.sortDirection="asc"),active:g.sortDirection==="asc"},{default:A(()=>[C(sn,null,{default:A(()=>[le(W(g.t("models.sort.direction.asc")),1)]),_:1}),g.sortDirection==="asc"?(P(),ne(sn,{key:0,side:""},{default:A(()=>[C(Ze,{name:"check"})]),_:1})):Ye("",!0)]),_:1},8,["active"]),C(ht,{clickable:"",onClick:j[4]||(j[4]=_=>g.sortDirection="desc"),active:g.sortDirection==="desc"},{default:A(()=>[C(sn,null,{default:A(()=>[le(W(g.t("models.sort.direction.desc")),1)]),_:1}),g.sortDirection==="desc"?(P(),ne(sn,{key:0,side:""},{default:A(()=>[C(Ze,{name:"check"})]),_:1})):Ye("",!0)]),_:1},8,["active"])]),_:1})]),_:1},8,["label"])]),_:1},8,["modelValue","loading","placeholder"])]),C(jo,{class:"overflow-auto models-list"},{default:A(()=>[g.filteredModels.length?(P(),ne(Jo,{key:0,name:"list2"},{default:A(()=>[(P(!0),xe(Pn,null,Qn(g.filteredModels,_=>tp((P(),ne(ht,{key:_.slug,clickable:"",active:g.currentSlug===_.slug,class:ca(g.currentSlug===_.slug?"text-primary":"text-dim"),onClick:F=>g.selectModel(_.slug)},{default:A(()=>[C(sn,null,{default:A(()=>[C(ua,null,{default:A(()=>[le(W(_.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","class","onClick"])),[[ip]])),128))]),_:1})):(P(),xe("div",Up,W(g.t("models.search.no_results",{query:g.searchQuery})),1))]),_:1})]),Y("div",Gp,[g.isLoading?(P(),xe("div",Dp,[C(gp,{color:"primary",size:"40"}),Y("div",Np,W(g.t("models.loading")),1)])):g.error?(P(),xe("div",Hp,[C(Ze,{name:"error_outline",color:"negative",size:"40px"}),Y("div",Jp,W(g.error),1),C(qi,{flat:"",color:"primary",label:g.t("models.back_to_models"),class:"q-mt-md",onClick:j[6]||(j[6]=_=>g.router.push("/models"))},null,8,["label"])])):g.selectedModel?(P(),xe(Pn,{key:2},[g.selectedModel.metadata.deprecated_by?(P(),ne(ap,{key:0,dense:"",class:"bg-warning text-black ellipsis","inline-actions":g.$q.screen.gt.md},{avatar:A(()=>[C(Ze,{name:"warning"})]),action:A(()=>[(P(!0),xe(Pn,null,Qn(g.selectedModel.metadata.deprecated_by,_=>(P(),ne(qi,{flat:"","text-color":"black",size:"sm",square:"","no-caps":"",key:_,color:"white",label:_,icon:"link",onClick:F=>g.selectModel(_)},null,8,["label","onClick"]))),128))]),default:A(()=>[le(" "+W(g.t("models.warnings.deprecated"))+" ",1)]),_:1},8,["inline-actions"])):Ye("",!0),C(ep,{flat:"",square:"",class:"metadata-section bg-mixed-100 q-mb-xl q-pa-md"},{default:A(()=>[C(la,null,{default:A(()=>{var _,F,Ve;return[Y("div",jp,[Y("div",null,[(_=g.selectedModel.metadata.endpoints)!=null&&_.includes("embedding")?(P(),ne(Ze,{key:0,class:"info-icon",name:"img:"+g.embeddingIcon},{default:A(()=>[C(Gt,null,{default:A(()=>[le(W(g.t("landing_page.embeddings")),1)]),_:1})]),_:1},8,["name"])):(F=g.selectedModel.metadata.endpoints)!=null&&F.includes("rank")?(P(),ne(Ze,{key:1,class:"info-icon",name:"img:"+g.rerankerIcon},{default:A(()=>[C(Gt,null,{default:A(()=>[le(W(g.t("landing_page.reranker")),1)]),_:1})]),_:1},8,["name"])):(Ve=g.selectedModel.metadata.endpoints)!=null&&Ve.includes("read")?(P(),ne(Ze,{key:2,class:"info-icon",name:"img:"+g.readerIcon},{default:A(()=>[C(Gt,null,{default:A(()=>[le(W(g.t("landing_page.reader")),1)]),_:1})]),_:1},8,["name"])):Ye("",!0),g.ccncOptions.includes(g.selectModelName)?(P(),ne(Ze,{key:3,class:"info-icon",name:"copyright"},{default:A(()=>[C(Gt,null,{default:A(()=>[le(W(g.t("landing_page.ccbync")),1)]),_:1})]),_:1})):Ye("",!0)])]),Y("h1",Kp,W(g.selectModelName),1),Y("div",Qp,[Y("div",Yp,W(g.t(`embedding.${g.selectModelName.replace(".","")}_description`)),1),g.selectedModel.metadata.release_blog?(P(),ne(qi,{key:0,flat:"",label:g.t("models.metadata.release_blog"),square:"",to:g.selectedModel.metadata.release_blog,"icon-right":"arrow_forward",class:"col-auto bg-mixed-200",target:"_blank"},null,8,["label","to"])):Ye("",!0)])]}),_:1}),C(la,null,{default:A(()=>{var _;return[Y("div",Zp,[Y("div",Xp,W(g.t("models.metadata.license")),1),C(gt,{icon:g.ccncOptions.includes(g.selectModelName)?"copyright":"license",style:{"border-radius":"0"},size:"sm",class:"bg-mixed-200",color:"transparent",label:g.selectedModel.metadata.license},null,8,["icon","label"])]),Y("div",Vp,[Y("div",$p,W(g.t("models.metadata.release_date")),1),C(gt,{icon:"calendar_month",style:{"border-radius":"0"},size:"sm",class:"bg-mixed-200",color:"transparent",label:g.selectedModel.metadata.release_date},{default:A(()=>[C(Gt,null,{default:A(()=>[le(W(g.t("models.metadata.release_date")),1)]),_:1})]),_:1},8,["label"])]),Y("div",ev,[Y("div",nv,W(g.t("models.sections.model_details")),1),(P(!0),xe(Pn,null,Qn(g.modelDetails,F=>(P(),ne(gt,{key:F.key,style:{"border-radius":"0"},size:"sm",class:"bg-mixed-200"},{default:A(()=>[le(W(g.t(`models.sections.${F.key}`))+": "+W(F.value),1)]),_:2},1024))),128))]),(_=g.selectedModel.metadata.language)!=null&&_.length?(P(),xe("div",tv,[Y("div",iv,W(g.t("models.sections.language_support")),1),(P(!0),xe(Pn,null,Qn(g.selectedModel.metadata.language,F=>(P(),ne(gt,{square:"",style:{"border-radius":"0"},size:"sm",key:F,class:"bg-mixed-200"},{default:A(()=>[le(W(`${g.langcode2SingleEmoji(F)} ${g.mapLangCodeToLanguageName(F)}`),1)]),_:2},1024))),128))])):Ye("",!0),g.selectedModel.metadata.related_models&&g.selectedModel.metadata.related_models.length?(P(),xe("div",rv,[Y("div",av,W(g.t("models.metadata.related_models")),1),(P(!0),xe(Pn,null,Qn(g.selectedModel.metadata.related_models,F=>(P(),ne(gt,{clickable:"",square:"",key:F,class:"bg-mixed-200",size:"sm",style:{"border-radius":"0"},onClick:Ve=>g.selectModel(F),icon:"link"},{default:A(()=>[le(W(F),1)]),_:2},1032,["onClick"]))),128))])):Ye("",!0),Y("div",sv,[Y("div",ov,W(g.t("models.sections.tags")),1),(P(!0),xe(Pn,null,Qn(g.selectedModel.metadata.tags,F=>(P(),ne(gt,{size:"sm",style:{"border-radius":"0"},key:F,class:"bg-mixed-200"},{default:A(()=>[le(W(F),1)]),_:2},1024))),128))])]}),_:1}),C(la,{class:"row q-col-gutter-sm"},{default:A(()=>[Y("div",lv,W(g.t("models.sections.using_model")),1),(P(!0),xe(Pn,null,Qn(g.availableExternalLinks,_=>(P(),ne(qi,{"no-caps":"",flat:"",icon:_.icon,label:g.t(`models.metadata.${_.key}_link`),key:_.key,square:"",class:"ellipsis",href:_.link.startsWith("http")?_.link:void 0,to:_.link.startsWith("http")?void 0:_.link,target:"_blank"},null,8,["icon","label","href","to"]))),128))]),_:1})]),_:1}),C(g.ResearchersComponent,{"model-name":g.selectModelName},null,8,["model-name"]),C(V,{src:g.selectedModel.content,"copy-icon":"content_copy",class:ca(["gh-content q-mt-xl",{"q-px-md":g.$q.screen.lt.md}]),"no-line-numbers":"","no-heading-anchor-links":""},null,8,["src","class"]),Y("div",cv,W(g.t("models.sections.blogs")),1),C(g.NewsFilterComponent,{initiating:g.initiating,"translated-all-blogs":g.translatedAllBlogs,"search-by-title":g.selectModelName,"per-page":5},null,8,["initiating","translated-all-blogs","search-by-title"])],64)):(P(),xe("div",uv,W(g.t("models.select_model")),1))])],2)]),_:1})]),_:1})}const Lv=Xm(Bp,[["render",dv],["__file","ModelsPage.vue"]]);export{Lv as default};
