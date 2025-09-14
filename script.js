  // Sample product data
        const products = [
            {
                id: 1,
                title: "iPhone 12 Pro",
                price: "₦153,000",
                description: "Like new, 256GB, with original box and accessories. Used for 6 months.",
                image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                seller: {
                    name: "Michael Chen",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                    rating: 4.5
                }
            },
            {
                id: 2,
                title: "MacBook Air M1",
                price: "₦300,000",
                description: "2020 Model, 8GB RAM, 256GB SSD, excellent condition. Battery health 95%.",
                image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                seller: {
                    name: "Sarah Johnson",
                    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                    rating: 4.8
                }
            },
            {
                id: 3,
                title: "Samsung Galaxy S21",
                price: "₦150,000",
                description: "128GB, Phantom Black, slight scratch on screen but works perfectly.",
                image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjBzMjF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                seller: {
                    name: "David Wilson",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    rating: 5.0
                }
            },
            {
                id: 4,
                title: "Bose QuietComfort Headphones",
                price: "₦25,000",
                description: "Noise cancelling, excellent sound quality. Comes with carrying case.",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                seller: {
                    name: "Emily Rodriguez",
                    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    rating: 4.1
                }
            },
            {
                id: 5,
                title: "Nintendo Switch",
                price: "₦80,000",
                description: "Includes 3 games: Zelda, Mario Kart, and Smash Bros. Lightly used.",
                image: "https://media.istockphoto.com/id/1439752316/photo/a-closeup-of-a-nintendo-switch-in-the-hands-of-a-boy.webp?a=1&b=1&s=612x612&w=0&k=20&c=aRBY5RxOMtG3JVHmU-chYC26kdU10r0krU7OJIBWdCo=",
                seller: {
                    name: "Alex Turner",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    rating: 4.9
                }
            },
            {
                id: 6,
                title: "Canon EOS Rebel T7",
                price: "₦200,000",
                description: "DSLR camera with two lenses. Perfect for photography students.",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                seller: {
                    name: "Jessica Lee",
                    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    rating: 3.6
                }
            }
        ];

        // DOM Elements
        const productsGrid = document.getElementById('productsGrid');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const chatModal = document.getElementById('chatModal');
        const closeModalButtons = document.querySelectorAll('.close-modal');
        const userTypeButtons = document.querySelectorAll('.user-type-btn');
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-btn');
        const chatSellerAvatar = document.getElementById('chatSellerAvatar');
        const chatSellerName = document.getElementById('chatSellerName');
        const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');

        // Current seller for chat
        let currentSeller = null;

        // Generate product cards
        function renderProducts(productsArray) {
            productsGrid.innerHTML = '';
            productsArray.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-img">
                    <div class="product-details">
                        <div class="seller-info">
                            <img src="${product.seller.avatar}" alt="${product.seller.name}" class="seller-avatar">
                            <div class="seller-name">${product.seller.name}</div>
                            <div class="seller-rating">${getStarRating(product.seller.rating)}</div>
                        </div>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-desc">${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        <div class="product-actions">
                            <button class="action-btn btn-save">
                                <img src="cart-icon.png" width="20" alt="Save"> Save
                            </button>
                            <button class="action-btn btn-message" data-seller-id="${product.seller.name}">
                                <i class="far fa-comment"></i> Message
                            </button>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to message buttons
            document.querySelectorAll('.btn-message').forEach(button => {
                button.addEventListener('click', function() {
                    const sellerName = this.getAttribute('data-seller-id');
                    openChat(sellerName);
                });
            });
        }

        // Get star rating HTML
        function getStarRating(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            let stars = '';
            
            for (let i = 0; i < fullStars; i++) {
                stars += '★';
            }
            
            if (halfStar) {
                stars += '⯪';
            }
            
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                stars += '☆';
            }
            
            return stars;
        }

        // Open chat with seller
        function openChat(sellerName) {
            const seller = products.find(p => p.seller.name === sellerName)?.seller;
            if (seller) {
                currentSeller = seller;
                chatSellerAvatar.src = seller.avatar;
                chatSellerName.textContent = seller.name;
                chatMessages.innerHTML = `
                    <div class="message received">
                        Hi there! I'm interested in your item. Is it still available?
                    </div>
                `;
                chatModal.style.display = 'flex';
            }
        }

        // Search functionality
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm.trim() === '') {
                renderProducts(products);
                return;
            }
            
            const filteredProducts = products.filter(product => 
                product.title.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.seller.name.toLowerCase().includes(searchTerm)
            );
            
            renderProducts(filteredProducts);
        }

        // Event Listeners
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });

        signupBtn.addEventListener('click', () => {
            signupModal.style.display = 'flex';
        });

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                loginModal.style.display = 'none';
                signupModal.style.display = 'none';
                chatModal.style.display = 'none';
            });
        });

        userTypeButtons.forEach(button => {
            button.addEventListener('click', function() {
                userTypeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        chatSend.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message !== '') {
                const messageElement = document.createElement('div');
                messageElement.className = 'message sent';
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                chatInput.value = '';
                
                // Simulate reply after a short delay
                setTimeout(() => {
                    const replyElement = document.createElement('div');
                    replyElement.className = 'message received';
                    replyElement.textContent = "Thanks for your message! I'll get back to you soon.";
                    chatMessages.appendChild(replyElement);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
                
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        });

        // Close modal if clicked outside
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) loginModal.style.display = 'none';
            if (e.target === signupModal) signupModal.style.display = 'none';
            if (e.target === chatModal) chatModal.style.display = 'none';
        });

        // Initialize the page
        renderProducts(products);