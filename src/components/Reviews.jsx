import React from 'react';

const Reviews = () => {
    // Auto-import all images from the reviews assets folder
    const reviewImages = import.meta.glob('../assets/reviews/*.{png,jpg,jpeg,webp}', { eager: true });
    const reviews = Object.values(reviewImages).map((module) => module.default);

    return (
        <section id="reviews" className="section bg-reviews">
            <div className="container">
                <h2 className="section-title text-center">Student <span className="text-gold">Success</span></h2>
                <p className="section-subtitle text-center">
                    Real results from our community members.
                </p>

                {reviews.length > 0 ? (
                    <div className="reviews-grid">
                        {reviews.map((src, index) => (
                            <div key={index} className="review-card animate-on-scroll">
                                <img src={src} alt={`Student Review ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center empty-state">
                        <p className="text-muted">Reviews coming soon...</p>
                    </div>
                )}
            </div>

            <style>{`
        .bg-reviews {
          background-color: var(--bg-color);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 50px;
        }

        .review-card {
          border-radius: 16px;
          overflow: hidden;
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .review-card:hover {
          transform: translateY(-5px);
          border-color: var(--gold-primary);
        }

        .review-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain; /* Ensure text in screenshots is readable */
        }

        .empty-state {
            padding: 40px;
            border: 1px dashed rgba(255,255,255,0.1);
            border-radius: 12px;
            color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Reviews;
