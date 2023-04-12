const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    await doc.useServiceAccountAuth({
      private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
      client_email: process.env.CLIENT_EMAIL,
    });
    // console.log('logged');

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const data = JSON.parse(event.body);
    await sheet.addRow(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
