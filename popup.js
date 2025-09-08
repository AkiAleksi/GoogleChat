// popup.js

document.getElementById('askBtn').addEventListener('click', async () => {
  const question = document.getElementById('userInput').value;
  document.getElementById('response').textContent = 'Haetaan vastausta...';
  chrome.runtime.sendMessage({ action: 'ask_ai', question }, (response) => {
    document.getElementById('response').textContent = response?.answer || 'Virhe haettaessa vastausta.';
  });
});
