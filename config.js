// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Yairenis",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Would you do Me the Honor of Being my Valentine?💜​🥰​💞",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💜​', '💖', '😍​', '💗', '🩵​'],  // Heart emojis
        bears: ['😘', '👩‍❤️‍💋‍👨']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you love me?",                                    // First interaction
            yesBtn: "Sure?",                                             // Text for "Yes" button
            noBtn: "you all right i guess",                                               // Text for "No" button
            secretAnswer: "I absolutly love you with all my heart💞"           // Secret hover message
        },
        second: {
            text: "Be honest how much do you love me?",                          // For the love meter
            startText: "So much? Que rico😍!",                                   // Text before the percentage
            nextBtn: "Now that your overwhelming love was established let's continue, "                                         // Text for the next button
        },
        third: {
            text: "Will You be My Valentine and make Me the Luckiest man on Earth?!", // The big question!
            yesBtn: "Yes! A thousand times YES!",                                             // Text for "Yes" button
            noBtn: "i dont like you like that"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "HOLY MOLEY, just say you are obssesed with me? ☺️I love it",  // Shows when they go past 5000%
        high: "Oh yeah its all coming together😏",              // Shows when they go past 1000%
        normal: "Pretty good but it could be better🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yippieee, im honored baby Te amo mucho!",
        message: "Cant wait to see you y darte muchos besitos mi Reina Hermosa",
        emojis: "🩵​❤️‍🔥​🎉​💘​💌​💟​😘​🩵"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#40E0D0",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#20B2AA",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff8c62",     // Button color (should stand out against the background)
        buttonHover: "#ff9973",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#FFDB58"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "17s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "45px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.6s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 2.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/danqlbpor/video/upload/v1770856316/Sweet_Creature_-_Harry_Styles_Espa%C3%B1olLyrics_ckie0z.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
