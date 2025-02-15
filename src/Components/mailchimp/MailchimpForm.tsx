function MailchimpForm() {
  const mailchimpformHtml = `
       <div id="mc_embed_shell">

<style type="text/css">
        #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
#mergeRow-gdpr {margin-top: 20px;}
#mergeRow-gdpr fieldset label {font-weight: normal;}
#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
</style>

<div id="mc_embed_signup">
    <form action="https://app.us11.list-manage.com/subscribe/post?u=e22096ae9fe2445f1ec81cf8a&amp;id=0aa0611494&amp;v_id=4818&amp;f_id=0030c1e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Last Name </label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">

            <div class="content__gdpr" >
            <label>Marketing Permissions</label>
            <p>By ticking this box you consent to recieve emails from Nicki Wilkins:</p>
            <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
            <label class="checkbox subfield" for="gdpr47758">
            <input type="checkbox" id="gdpr_47758" name="gdpr[47758]" class="gdpr" value="Y">
            <span>Email</span>
            </label>
            </fieldset>
            <p>You can unsubscribe at any time by clicking the link in the footer of our emails.</p>
            </div>

            <div class="content__gdprLegal"><p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a className="link" id="link" href="https://mailchimp.com/legal/terms">Learn more</a> about Mailchimp's privacy practices.</p></div></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_e22096ae9fe2445f1ec81cf8a_0aa0611494" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                
                
                
                <p style="margin: 0px auto;">
                
                <a href="http://eepurl.com/i90cJ6" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='COMPANY';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
`;

  return <div dangerouslySetInnerHTML={{ __html: mailchimpformHtml }} />;
}

export default MailchimpForm;


