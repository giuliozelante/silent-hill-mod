/*jslint evil:true */
/*global DISQUS:false */
/**
 * Dynamic thread loader
 *
 * 
 *  * 
 * 
*/

(function (window) {
    var DISQUS = window.DISQUS;
    var jsonData, cookieMessages, session;

    // 
    if (!DISQUS || typeof DISQUS === 'function') {
        throw "DISQUS object is not initialized";
    }
    // 
    // json_data and default_json django template variables will close
    // and re-open javascript comment tags

    /* */ jsonData = {"reactions": [], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"417852622": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "thank u this tu tso helpful", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2012-01-21_22:46:44", "date": "1 year ago", "message": "<p>thank u this tu tso helpful</p>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 2, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 2, "user_key": "b693c8f0f74f7e781a51165a65d5fb5c", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "58031426": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "10x a lot. Very good tutorial.", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-06-22_08:52:02", "date": "2 years ago", "message": "<p>10x a lot. Very good tutorial.</p>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 5, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 5, "user_key": "cgsociety-310489", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "58190389": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Good and simple tutorial. Here's a little trick to sharpen your images as well: Copy your layers into a new layer. Then go to effects> high pass and set it to display some dark edges. Then change the layer mode to overlay.voila. Adjust the opacity as you like. ", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-06-23_03:44:21", "date": "2 years ago", "message": "<p>Good and simple tutorial. Here's a little trick to sharpen your images as well: Copy your layers into a new layer. Then go to effects&gt; high pass and set it to display some dark edges. Then change the layer mode to overlay.voila. Adjust the opacity as you like. </p>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 8, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 8, "user_key": "10649090d78b51ebc912fa69182fcf5d", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "58584310": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "wow, that's so helpful, thanks a lot :)", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-06-25_07:26:05", "date": "2 years ago", "message": "<p>wow, that's so helpful, thanks a lot :)</p>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 4, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 4, "user_key": "cgsociety-255848", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "58861255": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "GREAT tutorial! Is there a way to turn this into a PDF, so we can save it?", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-06-27_15:52:35", "date": "2 years ago", "message": "<p>GREAT tutorial! Is there a way to turn this into a PDF, so we can save it?</p>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 10, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 10, "user_key": "cgsociety-377801", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [58861255, 58190389, 58031426, 58584310, 417852622], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": false, "integration": {"receiver_url": "", "hide_user_votes": true, "reply_position": true, "disqus_logo": false}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1368049345", "users": {"cgsociety-255848": {"username": "cgsociety-255848", "registered": true, "is_remote": true, "verified": false, "about": "", "display_name": "dragonflysh", "url": "http://disqus.com/cgsociety-255848/", "remote_id": "255848", "blog": "", "points": 4, "avatar": "http://mediacdn.disqus.com/uploads/users/327/9957/avatar32.jpg?1281549414", "remote_domain": 1043, "remote_domain_name": "CGSociety"}, "cgsociety-310489": {"username": "cgsociety-310489", "registered": true, "is_remote": true, "verified": false, "about": "", "display_name": "RenderMan22", "url": "http://disqus.com/cgsociety-310489/", "remote_id": "310489", "blog": "", "points": 5, "avatar": "http://mediacdn.disqus.com/uploads/users/328/7182/avatar32.jpg?1281549414", "remote_domain": 1043, "remote_domain_name": "CGSociety"}, "10649090d78b51ebc912fa69182fcf5d": {"username": "Michiel", "registered": false, "is_remote": false, "verified": false, "about": "", "display_name": "Michiel", "url": "http://disqus.com/guest/10649090d78b51ebc912fa69182fcf5d/", "remote_id": null, "blog": "http://www.crulation.com", "points": 0, "avatar": "http://mediacdn.disqus.com/1368049345/images/noavatar32.png", "remote_domain": "", "remote_domain_name": ""}, "b693c8f0f74f7e781a51165a65d5fb5c": {"username": "A. thoufeeq", "registered": false, "is_remote": false, "verified": false, "about": "", "display_name": "A. thoufeeq", "url": "http://disqus.com/guest/b693c8f0f74f7e781a51165a65d5fb5c/", "remote_id": null, "blog": "", "points": 0, "avatar": "http://mediacdn.disqus.com/1368049345/images/noavatar32.png", "remote_domain": "", "remote_domain_name": ""}, "cgsociety-377801": {"username": "cgsociety-377801", "registered": true, "is_remote": true, "verified": false, "about": "", "display_name": "tsarist", "url": "http://disqus.com/cgsociety-377801/", "remote_id": "377801", "blog": "", "points": 10, "avatar": "http://mediacdn.disqus.com/uploads/users/349/6093/avatar32.jpg?1305125755", "remote_domain": 1043, "remote_domain_name": "CGSociety"}}, "user_unapproved": {}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 5, "offset_posts": 0, "slug": "cgsociety_the_top_ten_tips_of_texturing", "likes": 99, "num_pages": 9, "days_alive": 0, "moderate_none": false, "voters": {"cgsociety-d78d54dde8fbb7dbc9c38f1e37320def": {"url": "http://disqus.com/cgsociety-d78d54dde8fbb7dbc9c38f1e37320def/", "username": "cgsociety-d78d54dde8fbb7dbc9c38f1e37320def", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/uploads/users/531/9616/avatar32.jpg?1281549414", "name": "GP03-D"}, "cgsociety-ee32718ccf6a9feb4d7f140716635c26": {"url": "http://disqus.com/cgsociety-ee32718ccf6a9feb4d7f140716635c26/", "username": "cgsociety-ee32718ccf6a9feb4d7f140716635c26", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/1368049345/images/noavatar32.png", "name": "tanzan17"}, "cgsociety-f509c3e1ed8172fb83564125c21012f4": {"url": "http://disqus.com/cgsociety-f509c3e1ed8172fb83564125c21012f4/", "username": "cgsociety-f509c3e1ed8172fb83564125c21012f4", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/uploads/users/980/9938/avatar32.jpg?1281549414", "name": "CYLVER"}, "cgsociety-231975": {"url": "http://disqus.com/cgsociety-231975/", "username": "cgsociety-231975", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/uploads/users/442/1647/avatar32.jpg?1281549414", "name": "jiadams76"}, "cgsociety-896006b7511d4a7e8564f6b57d6d26d7": {"url": "http://disqus.com/cgsociety-896006b7511d4a7e8564f6b57d6d26d7/", "username": "cgsociety-896006b7511d4a7e8564f6b57d6d26d7", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/uploads/users/533/8040/avatar32.jpg?1281549414", "name": "AlvinCamidge"}}, "total_posts": 44, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "num_posts": 5, "closed": false, "per_page": 5, "id": 100991030, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "DNFzn2r2eWjGQOrjs1bsVVYY13rwrDRCXWqTDKkZu0FGVlQFjJL4eb0cp7aeFQWM", "features": {"achievements": true, "training": true, "logs": true, "realtime": true, "support_implementation": true, "partner_key": true, "multiauthor_moderation": true, "support_vip": true, "reports": true, "vip_servers": true, "analytics": true, "sso": true, "multisite_admin": true, "uptime": true, "dtpl_editor": true}, "comment_max_words": 0, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": false, "streaming_realtime": false, "reply_position": true, "id": 370098, "default_avatar_url": "http://mediacdn.disqus.com/1368049345/images/noavatar32.png", "template": {"url": "http://mediacdn.disqus.com/1368049345/uploads/themes/dsq7302e3f5e7c072aea8801faf8a492be0.js?1", "mobile": {"url": "http://mediacdn.disqus.com/1368049345/uploads/themes/mobile/theme.js?254", "css": "http://mediacdn.disqus.com/1368049345/uploads/themes/mobile/theme.css?254"}, "api": "1.0", "name": "CGSOCIETY 2011", "css": "http://mediacdn.disqus.com/1368049345/uploads/themes/dsq7302e3f5e7c072aea8801faf8a492be0.css?1"}, "max_depth": 3, "ranks_enabled": false, "lastUpdate": 1314844874, "linkbacks_enabled": false, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/37/98/cgsociety.css", "show_avatar": true, "reactions_enabled": false, "disqus_auth_disabled": false, "name": "CGSociety", "language": "en", "mentions_enabled": true, "url": "cgsociety", "allow_anon_post": true, "thread_votes_disabled": false, "hasCustomStyles": true, "moderate_all": false}, "settings": {"uploads_url": "http://mediacdn.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1368049345", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "52254943976", "juggler_url": "http://juggler.services.disqus.com", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1368049345"}, "ranks": {"cgsociety-255848": null, "cgsociety-310489": null, "cgsociety-377801": null}, "request": {"sort": "hot", "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": null, "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2013-05-09_05:00:37", "is_moderator": false, "ordered_unapproved_posts": [], "unapproved_posts": {}, "forum": "cgsociety", "is_initial_load": true, "display_username": "", "points": null, "has_email": false, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": false, "show_reply": true, "sigma_chance": 10, "use_google_signin": false, "switches": {"juggler_enabled": true, "next_realtime_indicators": true, "support_contact_with_frames": true, "community_icon": true, "next_profile_modal": true, "static_styles": true, "stats": true, "website_addons": true, "firehose_gnip_http": true, "discovery_next": true, "show_captcha_on_links": true, "next_dragdrop_nag": true, "is_last_modified": true, "firehose_pubsub": true, "firehose_gnip": true, "dark_jester": true, "limit_get_posts_days_30d": true, "new_embed_js": true, "next_use_handlebars": true, "next_comments_truncation_enabled": true, "discovery_next:top_placement": true, "website_follow_redirect": true, "upload_media": true, "shardpost:index": true, "filter_ads_by_country": true, "new_sort_paginator": true, "use_rs_paginator_5m": true, "firehose_push": true, "enable_link_affiliation": true, "shardpost": true, "textdigger_crawler": true, "discovery_analytics": true, "discovery_next:truncate": true, "next_show_new_media": true, "juggler_thread_onReady": true, "next_discard_low_rep": true, "mentions": true, "content_security_policy": true, "limit_textdigger": true}, "forum_facebook_key": "", "use_yahoo": true, "subscribed": false, "active_gargoyle_switches": ["community_icon", "content_security_policy", "dark_jester", "discovery_analytics", "discovery_next", "discovery_next:top_placement", "discovery_next:truncate", "enable_link_affiliation", "filter_ads_by_country", "firehose_gnip", "firehose_gnip_http", "firehose_pubsub", "firehose_push", "is_last_modified", "juggler_enabled", "juggler_thread_onReady", "limit_get_posts_days_30d", "limit_textdigger", "mentions", "new_embed_js", "new_sort_paginator", "next_comments_truncation_enabled", "next_discard_low_rep", "next_dragdrop_nag", "next_profile_modal", "next_realtime_indicators", "next_show_new_media", "next_use_handlebars", "shardpost", "shardpost:index", "show_captcha_on_links", "static_styles", "stats", "support_contact_with_frames", "textdigger_crawler", "use_rs_paginator_5m", "website_addons", "website_follow_redirect"], "realtime_speed": 15000, "use_openid": true}}; /* */
    /* __extrajson__ */
    cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null};

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }

    // The mappings below are for backwards compatibility--before we port all the code that
    // accesses jsonData.settings to DISQUS.settings

    var mappings = {
        debug:                'disqus.debug',
        minify_js:            'disqus.minified',
        read_only:            'disqus.readonly',
        recaptcha_public_key: 'disqus.recaptcha.key',
        facebook_app_id:      'disqus.facebook.appId',
        facebook_api_key:     'disqus.facebook.apiKey'
    };

    var urlMappings = {
        disqus_url:    'disqus.urls.main',
        media_url:     'disqus.urls.media',
        ssl_media_url: 'disqus.urls.sslMedia',
        realtime_url:  'disqus.urls.realtime',
        uploads_url:   'disqus.urls.uploads'
    };

    if (DISQUS.jsonData.context.switches.realtime_setting_change) {
        urlMappings.realtimeHost = 'realtime.host';
        urlMappings.realtimePort = 'realtime.port';
    }
    for (key in mappings) {
        if (mappings.hasOwnProperty(key)) {
            DISQUS.settings.set(mappings[key], DISQUS.jsonData.settings[key]);
        }
    }

    for (key in urlMappings) {
        if (urlMappings.hasOwnProperty(key)) {
            DISQUS.jsonData.settings[key] = DISQUS.settings.get(urlMappings[key]);
        }
    }

    DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

    DISQUS.jsonData.urls = {
        login: 'http://disqus.com/profile/login/',
        logout: 'http://disqus.com/logout/',
        upload_remove: 'http://cgsociety.disqus.com/thread/cgsociety_the_top_ten_tips_of_texturing/async_media_remove/',
        request_user_profile: 'http://disqus.com/AnonymousUser/',
        request_user_avatar: 'http://mediacdn.disqus.com/1368049345/images/noavatar92.png',
        verify_email: 'http://disqus.com/verify/',
        remote_settings: 'http://cgsociety.disqus.com/_auth/embed/remote_settings/',
        edit_profile_window: 'http://disqus.com/embed/profile/edit/',
        embed_thread: 'http://cgsociety.disqus.com/thread.js',
        embed_vote: 'http://cgsociety.disqus.com/vote.js',
        embed_thread_vote: 'http://cgsociety.disqus.com/thread_vote.js',
        embed_thread_share: 'http://cgsociety.disqus.com/thread_share.js',
        embed_queueurl: 'http://cgsociety.disqus.com/queueurl.js',
        embed_hidereaction: 'http://cgsociety.disqus.com/hidereaction.js',
        embed_more_reactions: 'http://cgsociety.disqus.com/more_reactions.js',
        embed_subscribe: 'http://cgsociety.disqus.com/subscribe.js',
        embed_highlight: 'http://cgsociety.disqus.com/highlight.js',
        embed_block: 'http://cgsociety.disqus.com/block.js',
        update_moderate_all: 'http://cgsociety.disqus.com/update_moderate_all.js',
        update_days_alive: 'http://cgsociety.disqus.com/update_days_alive.js',
        show_user_votes: 'http://cgsociety.disqus.com/show_user_votes.js',
        forum_view: 'http://cgsociety.disqus.com/cgsociety_the_top_ten_tips_of_texturing',
        cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
        realtime: DISQUS.jsonData.settings.realtime_url,
        thread_view: 'http://cgsociety.disqus.com/thread/cgsociety_the_top_ten_tips_of_texturing/',
        twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
        yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
        openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
        googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
        community: 'http://cgsociety.disqus.com/community.html',
        admin: 'http://cgsociety.disqus.com/admin/moderate/',
        moderate: 'http://cgsociety.disqus.com/admin/moderate/',
        moderate_threads: 'http://cgsociety.disqus.com/admin/moderate-threads/',
        settings: 'http://cgsociety.disqus.com/admin/settings/',
        unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',
        juggler: DISQUS.jsonData.settings.juggler_url,

        channels: {
            def:      'http://disqus.com/default.html', /* default channel */
            auth:     'https://disqus.com/embed/login.html',
            tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=cgsociety',
            edit:     'http://cgsociety.disqus.com/embed/editcomment.html'
        }
    };


    // 
    //     
    DISQUS.jsonData.urls.channels.reply = 'http://mediacdn.disqus.com/1368049345/build/system/reply.html';
    DISQUS.jsonData.urls.channels.upload = 'http://mediacdn.disqus.com/1368049345/build/system/upload.html';
    DISQUS.jsonData.urls.channels.sso = 'http://mediacdn.disqus.com/1368049345/build/system/sso.html';
    DISQUS.jsonData.urls.channels.facebook = 'http://mediacdn.disqus.com/1368049345/build/system/facebook.html';
    //     
    // 
}(window));
