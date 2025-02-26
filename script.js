const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    let text = textInput.value.trim(); 
    
    // Count words (split by spaces, filter out empty elements)
    let words = text.length > 0 ? text.split(/\s+/).filter(word => word.length > 0) : [];
    
    // Update counts
    wordCount.textContent = words.length;
    charCount.textContent = text.length;
});