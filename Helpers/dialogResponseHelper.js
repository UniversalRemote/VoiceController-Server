class DialogResponseHelper{

    constructor(){}

    makeSimpleResponse(text, conversationToken){
        return {
            conversation_token: conversationToken || Math.ceil(Math.random()*100),
            expect_user_response: false,
            final_response: {
                simple_response: {
                    text_to_speech: text || "Request received"
                }
            }
        };
    }
}

module.exports = DialogResponseHelper;