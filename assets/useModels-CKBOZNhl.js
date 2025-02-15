import{k as T,l as z,m}from"./index-BfNNvSwG.js";const j=`---
model_name: "ReaderLM-v2"
model_version: "v2"
model_type: "reader"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "1.54B"
language:
  - multilingual
token_length: 512K
device: "cuda"
release_date: "2025-01-16"
huggingface: "https://huggingface.co/jinaai/ReaderLM-v2"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
release_blog: "/news/readerlm-v2-frontier-small-language-model-for-html-to-markdown-and-json"
api_link: "/api-dashboard/reader"
input_type:
  - text (html)
output_type:
  - text (markdown)
  - text (json)
related_models:
  - reader-lm-1.5b
diagrams:
  - ReaderLM-v2-0.svg
  - ReaderLM-v2-1.svg
  - ReaderLM-v2.svg
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
  - reader-api
  - license
  - huggingface
  - aws
  - azure
  - gcp
---

## Overview

Reader LM 1.5B represents a breakthrough in efficient document processing, addressing the critical challenge of converting complex web content into clean, structured formats. This specialized language model tackles a fundamental problem in modern AI pipelines: the need to efficiently process and clean HTML content for downstream tasks without relying on brittle rule-based systems or resource-intensive large language models. What makes this model truly remarkable is its ability to outperform models 50 times its size while maintaining a surprisingly compact 1.54B parameter footprint. Organizations dealing with large-scale web content processing, documentation automation, or content management systems will find this model particularly valuable for its ability to handle extremely long documents while delivering superior accuracy in HTML-to-markdown conversion.

## Methods

The model employs an innovative "shallow-but-wide" architecture that challenges traditional scaling approaches in language model design. At its core are 28 transformer layers configured with 12 query heads and 2 key-value heads, creating a unique balance that optimizes for selective-copy operations while maintaining deep semantic understanding. The architecture features a hidden size of 1536 and an intermediate size of 8960, carefully tuned to handle sequences up to 256K tokens. The training process involved two distinct stages: first focusing on short-and-simple HTML with 32K token sequences, then advancing to long-and-hard HTML with 128K tokens, implementing zigzag-ring-attention for efficient processing. This approach, combined with contrastive search and specialized repetition detection mechanisms, enables the model to avoid common issues like degeneration and dull loops that typically plague smaller language models handling complex document processing tasks.

## Performance


In comprehensive benchmark evaluations, Reader LM 1.5B demonstrates exceptional capabilities that challenge industry standards. The model achieves a ROUGE-L score of 0.72 and a Token Error Rate of 0.19, significantly outperforming larger models like GPT-4 (0.43 ROUGE-L, 0.50 TER) and Gemini-1.5-Pro (0.42 ROUGE-L, 0.48 TER) in HTML-to-markdown conversion tasks. Its performance particularly shines in qualitative evaluations across four key dimensions: header extraction, main content extraction, rich structure preservation, and markdown syntax usage. The model consistently maintains high accuracy across diverse document types, from news articles and blog posts to landing pages and forum posts, in multiple languages including English, German, Japanese, and Chinese. This performance is achieved while processing documents up to 256K tokens in length, eliminating the need for expensive chunking operations that are typically required with larger models.

## Guidance

To effectively deploy Reader LM 1.5B, organizations should focus on scenarios involving complex HTML document processing where accuracy and efficiency are paramount. The model requires CUDA-capable GPU infrastructure for optimal performance, though its efficient architecture means it can run effectively on more modest hardware compared to larger alternatives. For production deployments, the model is available through both AWS SageMaker and Azure Marketplace, offering flexible integration options. While the model excels at HTML-to-markdown conversion, it's important to note that it's specifically optimized for this task and may not be suitable for general-purpose text generation or other NLP tasks. When processing extremely long documents (approaching 512K tokens), users should be aware that performance might degrade as this exceeds the model's training parameters. For optimal results, implement the provided repetition detection mechanisms and consider using contrastive search during inference to maintain output quality.
`,M=`---
model_name: "jina-clip-v1"
model_version: "v1"
model_type: "multimodal"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "223M"
language:
  - en
token_length: 8K
input_type:
  - image
  - text
output_type:
  - vector
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
`,q=`---
model_name: "jina-clip-v2"
model_version: "v2"
model_type: "multimodal"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
input_type:
  - image
  - text
output_type:
  - vector
language:
  - multilingual
diagrams:
  - jina-clip-v2.svg
  - jina-clip-v2-1.svg
token_length: 8K
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
`,A=`---
model_name: "jina-colbert-v1-en"
model_version: "v1"
model_type: "late-interaction"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "137M"
language:
  - en
input_type:
  - text
output_type:
  - multi-vector
token_length: 8K
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
`,E=`---
model_name: "jina-colbert-v2"
model_version: "v2"
model_type: "colbert"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "560M"
language:
  - multilingual
input_type:
  - text
output_type:
  - multi-vector
diagrams:
  - jina-colbert-v2.svg
  - jina-colbert-v2-1.svg
token_length: 8K
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
`,I=`---
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
input_type:
  - text
output_type:
  - vector
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
`,B=`---
model_name: "jina-embeddings-v2-base-code"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "137M"
language:
    - en
input_type:
  - text (code)
output_type:
  - vector
diagrams:
  - jina-embeddings-v2-base-code-1.svg
token_length: 8K
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
`,C=`---
model_name: "jina-embeddings-v2-base-de"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "161M"
language:
  - en
  - de
token_length: 8K
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
input_type:
  - text
output_type:
  - vector
---

## Overview

Jina Embeddings v2 Base German addresses a critical challenge in international business: bridging the language gap between German and English markets. For German companies expanding into English-speaking territories, where a third of businesses generate over 20% of their global sales, accurate bilingual understanding is essential. This model transforms how organizations handle cross-language content by enabling seamless text understanding and retrieval in both German and English, making it invaluable for companies implementing international documentation systems, customer support platforms, or content management solutions. Unlike traditional translation-based approaches, this model directly maps equivalent meanings in both languages to the same embedding space, enabling more accurate and efficient bilingual operations.

## Methods

The model achieves its impressive bilingual capabilities through an innovative architecture that processes both German and English text within a unified 768-dimensional embedding space. At its core, it employs a transformer-based neural network with 161 million parameters, carefully trained to understand semantic relationships across both languages. What makes this architecture particularly effective is its bias minimization approach, specifically designed to avoid the common pitfall of favoring English grammatical structures - a problem identified in recent research with multilingual models. The model's extended context window of 8,192 tokens allows it to process entire documents or multiple pages of text in a single pass, maintaining semantic coherence across long-form content in both languages.

## Performance

In real-world testing, Jina Embeddings v2 Base German demonstrates exceptional efficiency and accuracy, particularly in cross-language retrieval tasks. The model outperforms Microsoft's E5 base model while being less than a third of its size, and matches the performance of E5 large despite being seven times smaller. Across key benchmarks, including WikiCLIR for English-to-German retrieval, STS17 and STS22 for bidirectional language understanding, and BUCC for precise bilingual text alignment, the model consistently demonstrates superior capabilities. Its compact size of 322MB enables deployment on standard hardware while maintaining state-of-the-art performance, making it particularly efficient for production environments where computational resources are a consideration.

## Guidance

To effectively deploy Jina Embeddings v2 Base German, organizations should consider several practical aspects. The model integrates seamlessly with popular vector databases like MongoDB, Qdrant, and Weaviate, making it straightforward to build scalable bilingual search systems. For optimal performance, implement proper text preprocessing to handle the 8,192 token limit effectively - this typically accommodates about 15-20 pages of text. While the model excels at both German and English content, it's particularly effective when used for cross-language retrieval tasks where query and document languages may differ. Organizations should consider implementing caching strategies for frequently accessed content and use batch processing for large-scale document indexing. The model's AWS SageMaker integration provides a reliable path to production deployment, though teams should monitor token usage and implement appropriate rate limiting for high-traffic applications. When using the model for RAG applications, consider implementing language detection to optimize prompt construction based on the input language.
`,L=`---
model_name: "jina-embeddings-v2-base-en"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "137M"
language:
  - en
input_type:
  - text
output_type:
  - vector
token_length: 8K
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
`,R=`---
model_name: "jina-embeddings-v2-base-es"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "161M"
language:
  - en
  - es
input_type:
  - text
output_type:
  - vector
token_length: 8K
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
`,G=`---
model_name: "jina-embeddings-v2-base-zh"
model_version: "v2"
model_type: "text-embeddings"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "161M"
language:
  - en
  - zh
input_type:
  - text
output_type:
  - vector
token_length: 8K
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
`,P=`---
model_name: "jina-embeddings-v3"
model_version: "v3"
model_type: "text-embeddings"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "570M"
language:
  - multilingual
input_type:
  - text
output_type:
  - vector
diagrams:
  - jina-embeddings-v3-1.svg
token_length: 8K
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
`,J=`---
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
input_type:
  - text (query)
  - text (document)
output_type:
  - ranking
language:
  - en
token_length: 8K
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
`,W=`---
model_name: "jina-reranker-v1-tiny-en"
model_version: "v1"
model_type: "reranker"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "33M"
language:
  - en
token_length: 8K
device: "cuda"
input_type:
  - text (query)
  - text (document)
output_type:
  - ranking
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
`,S=`---
model_name: "jina-reranker-v1-turbo-en"
model_version: "v1"
model_type: "reranker"
organization: "Jina AI"
license: "Apache-2.0"
parameter_size: "37.8M"
language:
  - en
token_length: 8K
device: "cuda"
input_type:
  - text (query)
  - text (document)
output_type:
  - ranking
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
`,O=`---
model_name: "jina-reranker-v2-base-multilingual"
model_version: "v2"
model_type: "reranker"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "278M"
language:
  - multilingual
token_length: 8K
device: "cuda"
input_type:
  - text (query)
  - text (document)
output_type:
  - ranking
diagrams:
  - jina-reranker-v2-base-multilingual.svg
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
`,F=`---
model_name: "reader-lm-0.5b"
model_version: "v1"
model_type: "reader"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "494M"
language:
  - multilingual
token_length: 256K
device: "cuda"
input_type:
  - text (html)
output_type:
  - text (markdown)
deprecated_by:
  - ReaderLM-v2
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
`,U=`---
model_name: "reader-lm-1.5b"
model_version: "v1"
model_type: "reader"
organization: "Jina AI"
license: "CC-BY-NC-4.0"
parameter_size: "1.54B"
language:
  - multilingual
token_length: 256K
device: "cuda"
release_date: "2024-08-11"
deprecated_by:
  - ReaderLM-v2
huggingface: "https://huggingface.co/jinaai/reader-lm-1.5b"
aws: "https://aws.amazon.com/marketplace/seller-profile/vendor/jinaai"
release_blog: "/news/reader-lm-small-language-models-for-cleaning-and-converting-html-to-markdown"
input_type:
  - text (html)
output_type:
  - text (markdown)
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
`;function K(){const a=T([]),v=(n,r)=>{const[u,g,...l]=n.split("---"),e={};let t=null,h=!1,c=!1,s={};if(g.split(`
`).forEach(_=>{const o=_.trim();if(!(!o||o.startsWith("#"))){if(o.startsWith("- ")){const i=o.substring(2);c&&t==="metrics"?i.startsWith("name:")?(Object.keys(s).length>0&&(e.metrics=e.metrics||[]).push(s),s={name:i.substring(5).trim()}):i.startsWith("value:")&&(s.value=parseFloat(i.substring(6).trim())||i.substring(6).trim()):t&&(Array.isArray(e[t])||(e[t]=[]),e[t].push(i));return}if(o.includes(":")){const[i,...x]=o.split(":"),d=i.trim(),f=x.join(":").trim();t=d,h=f==="",c=d==="metrics",!h&&!c?e[d]=f.replace(/^["'](.*)["']$/,"$1"):h&&(e[d]=[])}}}),c&&Object.keys(s).length>0&&(e.metrics=e.metrics||[]).push(s),!e.model_name||!e.model_version||!e.model_type||!e.organization||!e.license||!e.tags)throw new Error(`Missing required metadata fields in model ${r}`);const p={model_name:e.model_name,model_version:e.model_version,model_type:e.model_type,organization:e.organization,license:e.license,token_length:e.token_length,image_size:e.image_size,tags:e.tags||[],diagrams:e.diagrams||[],input_type:e.input_type||[],output_type:e.output_type||[],architecture:e.architecture,parameter_size:e.parameter_size,training_data:e.training_data,input_format:e.input_format,output_dimension:e.output_dimension,language:e.language||[],metrics:e.metrics,quantization:e.quantization,intended_use:e.intended_use,limitations:e.limitations,ethical_considerations:e.ethical_considerations,hardware_requirements:e.hardware_requirements,api_type:e.api_type,api_link:e.api_link,aws:e.aws,release_blog:e.release_blog,deprecated_by:e.deprecated_by,related_models:e.related_models,arxiv:e.arxiv,huggingface:e.huggingface,endpoints:e.endpoints||[],release_date:e.release_date,availability:e.availability||[]};return{slug:r,name:p.model_name,metadata:p,content:l.join("---").trim()}};z(async()=>{try{const n=Object.assign({"../content/models/ReaderLM-v2.md":j,"../content/models/jina-clip-v1.md":M,"../content/models/jina-clip-v2.md":q,"../content/models/jina-colbert-v1-en.md":A,"../content/models/jina-colbert-v2.md":E,"../content/models/jina-embedding-b-en-v1.md":I,"../content/models/jina-embeddings-v2-base-code.md":B,"../content/models/jina-embeddings-v2-base-de.md":C,"../content/models/jina-embeddings-v2-base-en.md":L,"../content/models/jina-embeddings-v2-base-es.md":R,"../content/models/jina-embeddings-v2-base-zh.md":G,"../content/models/jina-embeddings-v3.md":P,"../content/models/jina-reranker-v1-base-en.md":J,"../content/models/jina-reranker-v1-tiny-en.md":W,"../content/models/jina-reranker-v1-turbo-en.md":S,"../content/models/jina-reranker-v2-base-multilingual.md":O,"../content/models/reader-lm-0.5b.md":F,"../content/models/reader-lm-1.5b.md":U});a.value=Object.entries(n).map(([r,u])=>{var l;const g=((l=r.split("/").pop())==null?void 0:l.replace(".md",""))||"";return v(u,g)})}catch(n){console.error("Error loading model files:",n),a.value=[]}});const b=m(()=>a.value.find(n=>n.name==="jina-reranker-v2-base-multilingual")),y=m(()=>a.value.find(n=>n.name==="jina-clip-v1")),w=m(()=>a.value.find(n=>n.name==="jina-clip-v2")),k=m(()=>a.value.find(n=>n.name==="jina-clip-v2"));return{models:a,jinaRerankerMultilingual:b,clipV1:y,clipV2:w,defaultEmbeddingModel:k}}export{K as u};
