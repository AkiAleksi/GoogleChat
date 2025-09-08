// background.js


// Lisää OpenAI API-avaimesi tähän:
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'ask_ai') {
    askOpenAI(request.question).then(answer => {
      sendResponse({ answer });
    }).catch(() => {
      sendResponse({ answer: 'Virhe OpenAI API:ssa.' });
    });
    return true; // async vastaus
  }
});


async function askOpenAI(question) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
      max_tokens: 200
    })
  });
  if (!response.ok) throw new Error('API error');
  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Ei vastausta.';
}
