# Hugging face models : Speech-to-text, Text-to-speech.

## 1. Text-to-speech models

TTS models are used to generate synthetic natural sounding speech from texts.

### Models explored

|Model name| Link |
|----------|----------------------------------|
|myshell-ai/MeloTTS | [Link](https://huggingface.co/myshell-ai/MeloTTS-English)|
|facebook/fastspeech2-en-ljspeech| [Link](https://huggingface.co/facebook/fastspeech2-en-ljspeech)|
|microsoft/speecht5_tts|[Link](https://huggingface.co/microsoft/speecht5_tts)|

### Metrics observed

The usability, licensing terms, and limitations of the models were evaluated.

### Observations

| S.no |    Model name   | License | Languages supported | Limitations |
|------|----------------|----------|------------------------|-------------------------|
|   1  |myshell-ai/MeloTTS| MIT - Free for commercial use|Supports English, Spanish, French, Chinese, Japanese and Korean| 1.  Not able to distinguish between quantifiable numerical values and discrete identifiers, such as phone numbers, PIN codes, etc. <br> <br> 2. Could not read acronyms.
|   2  |facebook/fastspeech2-en-ljspeech| No information provided | Supports only English | 1.  Not able to distinguish between quantifiable numerical values and discrete identifiers, such as phone numbers, PIN codes, etc. <br> <br> 2. Could not identify date and time. <br><br> 3. Could not read acronyms.
|   3  |microsoft/speecht5_tts|MIT - Free for commercial use | Supports only English | Can't read numbers, acronyms, date and times.

<br>

## 2. Speech to text models

Speech-to-text models are primarily utilized for transcribing audio containing spoken language into written text. In some cases, these models are also used for translating speech from one language to another.

### Models explored

|Model name| Link |
|----------|----------------------------------|
|pyannote/speaker-diarization-3.1 | [Link](https://huggingface.co/pyannote/speaker-diarization-3.1)|
|openai/whisper-large-v3| [Link](https://huggingface.co/openai/whisper-large-v3)|
|facebook/seamless-m4t-v2-large|[Link](https://huggingface.co/facebook/seamless-m4t-v2-large)|

### Metrics observed

The usability of the models, licensing terms, and other distinguishing features were evaluated.

### Observations

| S.no |    Model name   | License | Languages supported | Key features |
|------|----------------|----------|------------------------|-------------------------|
|   1  |pyannote/speaker-diarization-3.1| MIT - Free for commercial use|Supports English| 1. The uploaded audio files are resampled to 16 Hz before processing <br><br> 2. Can identify multiple speakers in the audio and can distinguish them. <br> <br> 3. No manual voice activity detection is required.
|   2  |openai/whisper-large-v3| apache 2.0 license - Free for commercial use | Supports multiple languages | 1. Able to detect the language from the audio file automatically. <br> <br> 2. Can perform speech translation. <br><br> 3. At times the model halluciantes, the prediction may include texts that are not actually present in the audio. <br><br> 4. Prediction accuracy is uneven across languages
|   3  |microsoft/speecht5_tts|cc-by-nc-4.0 - Not free for commercial use| Supports multiple languages | 1. Supports speech input from 101 different languages and text output to 96 different languages. <br> <br> 2. Performs speech to text processing and speech to text translation. <br> <br> 3. Trained on 2.3 Billion parameters.

# LLM's - Large Langugae Models.


Large language models (LLMs) are employed to perform a wide range of natural language processing tasks, including text generation, chatbot development, language translation, knowledge extraction, and code generation. Various LLMs are available in the market, and selecting the appropriate model depends on the specific task requirements.

Here's a comparitive study of three widely used Large Language models.

| S.no | Model name | Mode of usage | Pricing | Notes
|------|------------|------------------|--------|-----------|
|   1  | openai/GPT-4o | Through API call | $2.50 / 1M input tokens<br>$10.00 / 1M output tokens | 1. Context window : 128,000 tokens <br><br> 2. Maximum output tokens : 16,384 <br><br> 3. Training data : upto October 2023. |
|   2  | google/gemini-1.5-pro | Through API call | Prompts upto 128k tokens: <br><br> input pricing : $1.25 / 1 million tokens<br> output pricing : $5.00 / 1 million tokens <br><br> Prompts over 128k tokens: <br><br> input pricing: $2.50 / 1 million tokens<br> output pricing: $10.00 / 1 million tokens|1. Context window : 1 million<br><br> 2. Input token limit : 2,097,152<br><br> 3. Output token limit : 8,192|
|   3  |meta/Llama-3.1| Through local storage | Open source - Free to use | Context length : 128k tokens

# Parameter efficient fine tuning (PEFT).

* #### Why parameter tuning ? 

    Parameter tuning is primarily used to fine tune generalized pretrained models to perform specific tasks with better accuracy.

* #### What is the need for PEFT ?
    
    Parameter efficient fine tuning (PEFT) offers a computationally efficient approach to fine-tuning large models, which typically consist of millions or even billions of parameters. Fine-tuning all these parameters requires advanced GPUs and significant memory resources. PEFT addresses this challenge by reducing the number of parameters that need to be fine-tuned. It selectively targets the layers within the model that have a substantial impact on the performance of a specific task while keeping other parameters frozen. This strategy not only conserves computational resources but also enhances the overall efficiency of the fine-tuning process.

## 1. Prompt based PEFT methods.

* In a prompt-based parameter tuning method, a set of vector embeddings are included alongside the input to the model. These embeddings are trained while keeping the rest of the model's parameters frozen, during the fine tuning process. 

* There are three types of prompt-based fine-tuning: p-tuning, prefix tuning, and prompt tuning.

<br>

 | S.no | Type of prompt based method | Trainable parameter | Position of embeddings | Influence |Analogy |
 |-----|------|------|-----------|-----------|---------|
 |  1  | p-tuning | Trainable embeddings | Added along with the input. No particular position is defined. | Directly modifies how model processes each input token | It is like inserting special words inside a sentence to change its meaning. |
 |  2  | prefix tuning | Trainable prefix embeddings | Prepended before input. | Modifies the attention mechanism (like a bias) | It is like setting a specific mood or tone before reading the sentence, so the reader interprets it differently |
 |  3  | prompt tuning | Trainable prompt embeddings | Prepended before input. | Provides task-specific context or hints to guide the model output | It is like giving the reader a hint before showing them the sentence, so they know what to focus on. |

 <br>

 ## 2. Low Rank Adaptation method (LoRA).

* In the traditional process of fine-tuning a pre-trained model to perform a specific task, the weights associated with the already trained model are adjusted according to the requirements of that task.

* Consider the weights represented in the form of a matrix. In Low-Rank Adaptation (LoRA), a new matrix is added to the pre-existing weight matrix to facilitate this adjustment. This new matrix is then trained while keeping the remaining parameters of the model frozen. This training process occurs at specific layers of the model during the fine-tuning phase keeping the rest of the model untouched, tailored to the specific task at hand.

* Mathematically this can be represented as, W<sub>new</sub> = W<sub>pretrained</sub> + ΔW

* Here, W<sub>pretrained</sub> is the existing weights matrix and ΔW is the additional weight matrix added. 

* The ΔW matrix is formed by matrix multiplication between two low ranked matrices A and B, such that, ΔW = AB. If the dimention of the W<sub>pretrained</sub> is H x H then the dimentions of the matrices A and B are H x r and r x H respectively. Here r is the rank of the matrix and is always less than H.

* By this way the dimentions of the trainable parameters matrix is reduced to rank r.

* In practice, often the additional weight added is scaled by a factor α before it gets added with the pretrained weights. Alpha (α) is a scaling factor used in LoRA that adjusts the influence of the low-rank matrices during training and inference. It helps balance the original model weights and the low-rank adaptations. By modifying how much the low-rank matrices contribute to the overall prediction, alpha can control the complexity and capacity of the adaptations being learned. The final expression is shown below. <br><br> W<sub>new</sub> = W<sub>pretrained</sub> + α.(AB)

* While fine tunig a pre trained model using LoRA, based on the task we want the model to perform, the values of r and α are adjusted along with the choice of layer in the model where we want to adjust the weights.

<br>

# Transformers.

* Transformer models are used to perform various natural language processing tasks, audio recognition tasks, computer vision tasks etc. Transformers are widely used right now due to it's capability of paralell processing of inputs and large context memory.

* In the case of text input processing, the transformers process input text by tokenizing it into smaller units, converting these tokens into fixed-length embeddings, and adding positional encodings for word order. Using self-attention and multi-head attention, they capture relationships between tokens. The model consists of stacked layers and can be fine-tuned for specific tasks, enabling effective output generation and classification.

* There are a variety of pre trained transformer models in the hugging face transformer libraries that are used to do a variety of tasks such as text classification, text generation, audio recognition, image generation etc.

* These generalized pre trained models can be fine tuned to perform specific tasks by adjusting the weights of parameters of the model.

<br>

# Tokenizers.

Tokenizers convert the input text into a format the machine learning models can easily understand. They first break the input text into smaller components this can be words or subwords. These tokens are then mapped to a numerical representation which will make it easier for the models to understand.

* Let us take a simple example input text : " I am a developer".

* The text will be first broken into smaller segments : ["I",  "am", "a", "developer"].

* These tokens will be mapped to specific numerical id's to make the models understand the input. Our input text can be coded like this : [101, 1212, 1233, 1121, 1440, 102]. <br><br>
Here 101 represents 101 represents [CLS] which is the start of the text input segment and 102 represents [SEP] which is the end of a segment.

* These numbers are not just any random numbers. The models will have seperate vocabulary and each word in the vocabulary corresponds to a seperate unique id. Tokenizers maps these id's to the tokens after segmenting them.

* In case if there's a text input which cannot be found in the vocabulary, the tokenizers try to split the word into subwords to assign an unique id to it. If it is still not able to split the word an unkown token id [UNK] is assigned to such tokens.

* After mapping with the id's, an attention mask list is developed for the input, indicating which tokens are important for the model to pay attention to (marked by 1) and which are padding tokens (marked by 0). <br><br>
Let us look at an example where we can see the use of attention mask, <br><br>
Consider a model that accepts input sequence of only length 6 and our input text is ["I", "am", "a", "developer"]. Then the input should be padded up to length 6 for the model to accept it. This is can be done by adding padding tokens at the end of the input. Our formatted input will look something like this : ["I", "am", "a", "developer", [PAD], [PAD]].
<br><br>
In this input the padding tokens will add no value to our input and should be ignored by our model. So when the tokenizer develops an attention mask it will add 0s in place of the padding tokens. The attention mask for this input text will be [1,1,1,0,0]. <br><br>
By this way the model can focus only on the important tokens of the text input.

* After computing the attention mask, the tokenizer formats the output as a dictionary containg the list of id's and another list containg attention masks for the corresponding tokens.<br><br>
For our text input the tokenizer output will be like, <br><br>
{<br>
"input_ids": [101, 1212, 1233, 1121, 1440, 102],<br>
  "attention_mask": [1, 1, 1, 1, 1, 1]
  <br>
}

<br>


# Accelerate.

* Accelerate is a handy library that makes training machine learning models in distributed setups much easier. When you execute an accelerator script, it first checks out the environment to figure out how many processes are running and which one the script is currently using. All this info is neatly stored in a thing called AcceleratorState.

* The first time you create an instance of the Accelerator, it sets up that AcceleratorState and shares the configuration across all instances. When you call the prepare() function, it gets to work wrapping your models, optimizers, and schedulers in specialized containers like AcceleratedOptimizer and AcceleratedScheduler, prepping everything for distributed training.

* A cool feature of Accelerate is how it handles data loaders, which it recreates as either DataLoaderShard or DataLoaderDispatcher. The DataLoaderShard splits the dataset among the various processes while keeping random operations, like shuffling, consistent across the board. Meanwhile, the DataLoaderDispatcher starts from process 0 and distributes the data to other processes from there.

* To keep randomness in check during things like shuffling, Accelerate synchronizes random number generators. If you’re using PyTorch version 1.6 or higher, it’s a good idea to go with local generators to avoid any clashes with the global random state.

* If you’re working with custom samplers, make sure to use local torch.Generator objects. This way, each process can randomize independently, preventing any unintended overlaps in the data.

* Additionally, if you’re using torchdata and have set use_stateful_dataloader=True, the library will inherit from StatefulDataLoader, which allows it to keep a state_dict. This ensures consistent data loading across multiple training iterations.



