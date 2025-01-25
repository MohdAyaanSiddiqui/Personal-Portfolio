
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

       
        const skills = [
            { name: 'JavaScript', level: 90 },
            { name: 'React', level: 30 },
            { name: 'SQL', level: 70 },
            { name: 'HTML', level: 95 },
            { name: 'JAVA', level: 55 },
            { name: 'CSS', level: 95 },
        ];

        const skillTree = document.getElementById('skillTree');
        const centerX = skillTree.offsetWidth / 2;
        const centerY = skillTree.offsetHeight / 2;
        const radius = Math.min(centerX, centerY) - 60;

        skills.forEach((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle) - 50;
            const y = centerY + radius * Math.sin(angle) - 50;

            const skillNode = document.createElement('div');
            skillNode.className = 'skill-node';
            skillNode.style.left = `${x}px`;
            skillNode.style.top = `${y}px`;
            skillNode.innerHTML = `<span>${skill.name}</span>`;
            skillNode.style.backgroundColor = `hsl(${(skill.level / 100) * 120}, 70%, 50%)`;
            skillNode.setAttribute('data-level', `${skill.level}%`);
            skillTree.appendChild(skillNode);
        });

        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

       
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.hobby-item');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight * 0.75) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        });
