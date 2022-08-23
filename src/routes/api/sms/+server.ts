import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import twilio from 'twilio';
import type { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const POST: RequestHandler = async (req) => {
    if (!req) {
        console.error(`Error: Request arrived with an empty body.`);
        throw error(500, `No body was sent with the request`);
    }

    console.log(`inside post ${req}`);

    return await new Response(JSON.stringify(`done`));

    // const {to, body} = req.request
    // const b = req.request;
    // console.log(b);
    // const postMe: MessageListInstanceCreateOptions;
    // // postMe.to
    // const { to, body } = await b

    // try {
    //     const { sid } = await client.messages.create({
    //         from: process.env.TWILIO_PHONE_NUMBER,
    //         to,
    //         body
    //     });

    //     console.log(`sid: ${sid}`);
    //     if (sid) {
    //         return {
    //             status: 200,
    //             body: `SMS send to ${to}. Message SID: ${sid}`
    //         };
    //     }
    // } catch (err) {
    //     console.error(err);
    //     return { status: 404, body: `Failed to send SMS. Check server logs for more details.` };
    // }
}
