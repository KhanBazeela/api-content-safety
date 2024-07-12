// const ContentSafetyClient = require("@azure-rest/ai-content-safety").default,
// { isUnexpected } = require("@azure-rest/ai-content-safety");
// const { AzureKeyCredential } = require("@azure/core-auth");
// // Load the .env file if it exists
// require("dotenv").config();
// const endpoint = process.env["CONTENT_SAFETY_ENDPOINT"]
// const key = process.env["CONTENT_SAFETY_API_KEY"]


// const credential = new AzureKeyCredential(key);
// const client = ContentSafetyClient(endpoint, credential);

// const text = "hate you";
// const analyzeTextOption = { text: text };
// const analyzeTextParameters= {
//    body: analyzeTextOption

//  };

// async function someFunction() {
// const result = await client.path("/text:analyze").post(analyzeTextParameters);

// // if (isUnexpected(result)) {
// //   throw result;gi
// // }
// console.log(result.body.categoriesAnalysis)

// console.log("Hate severity: ", result.body.categoriesAnalysis.find(item => item.category === 'Hate')?.severity);
// console.log("SelfHarm severity: ", result.body.categoriesAnalysis.find(item => item.category === 'SelfHarm')?.severity);
// console.log("Sexual severity: ", result.body.categoriesAnalysis.find(item => item.category === 'Sexual')?.severity);
// console.log("Violence severity: ", result.body.categoriesAnalysis.find(item => item.category === 'Violence')?.severity);

// // for (let i = 0; i < result.body.categoriesAnalysis.length; i++) {
// //   const textCategoriesAnalysisOutput = result.body.categoriesAnalysis[i];
// //   console.log(
// //     textCategoriesAnalysisOutput.category,
// //     " severity: ",
// //     textCategoriesAnalysisOutput.severity
// //   );
// // }

// }
// // Call the function
// someFunction();
