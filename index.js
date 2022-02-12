var textInput = document.getElementById("text-input");
var mockingText = document.getElementById("mocking-text")

function mockingConverter(str) {
	const strArray = str.toLowerCase().split("");
	const mocked = strArray.map((x,i) => i % 2 === 0 ? x : x.toUpperCase());
	return mocked.join("");
}

textInput.onkeyup = function(e) {
    const input = e.target.value
    mockingText.innerText = mockingConverter(input)
};

function copyText() {
    mockingText.select();
    document.execCommand("copy");
    alert("Copied text");
  }
