// Apple Pay x VNPAY Landing Page JavaScript
// Main functionality for interactive elements

document.addEventListener('DOMContentLoaded', function() {
    
    // Setup tab switching functionality
    document.querySelectorAll('.setup-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Remove active class from all tabs
            document.querySelectorAll('.setup-tab').forEach(t => {
                t.classList.remove('active');
            });

            // Remove active class from all tab contents
            document.querySelectorAll('.setup-tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content
            const targetContent = document.getElementById(targetTab + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            // Add play button functionality here
            console.log('Play button clicked');
        });
    }

    // FAQ toggle functionality for "Show More" button
    const faqToggleBtn = document.getElementById('faq-toggle-btn');
    if (faqToggleBtn) {
        faqToggleBtn.addEventListener('click', function() {
            const faqList = document.querySelector('.faq-list');
            const isExpanded = faqList.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse - show only first 10 questions
                faqList.classList.remove('expanded');
                this.textContent = 'Xem thêm';
            } else {
                // Expand - show all 26 questions
                faqList.classList.add('expanded');
                this.textContent = 'Thu gọn';
            }
        });
    }

    // Smooth scrolling for navigation links (if needed)
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add any additional functionality here as needed
    console.log('Apple Pay x VNPAY Landing Page loaded successfully');
    
});

// FAQ Accordion functionality
function toggleFAQ(questionWrapper) {
    const faqItem = questionWrapper.closest('.faq-item');
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isExpanded = faqItem.classList.contains('expanded');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item.expanded').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('expanded');
            const otherAnswer = item.querySelector('.faq-answer');
            otherAnswer.style.maxHeight = '0';
        }
    });
    
    // Toggle current FAQ item
    if (isExpanded) {
        faqItem.classList.remove('expanded');
        faqAnswer.style.maxHeight = '0';
    } else {
        faqItem.classList.add('expanded');
        
        // Set appropriate max-height based on content
        const answerHeight = faqAnswer.scrollHeight;
        faqAnswer.style.maxHeight = 'fit-content';
    }
}