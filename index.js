const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-PMQHVNPNEoEO14dR9kClv7pn",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


async function callapi() {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    });
    console.log(response.data.choices[0].text)
}

callapi()