export const metadata = {
  title: 'Privacy Policy - Fitmixai',
  description: 'Privacy Policy and data security for Fitmixai AI Virtual Try-On.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 prose prose-blue dark:prose-invert text-justify">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information we collect</h2>
      <p>We collect information you provide directly to us when you use our services, including user photos for virtual try-on features.</p>

      <h2>2. How we use information</h2>
      <p>We use the information we collect to provide, maintain, and improve our services, particularly to generate AI outfits and virtual try-on images.</p>

      <h2>3. Image processing</h2>
      <p>When you upload a photo for AI try-on, our AI models process it temporarily to generate the final image. We do not use your personal photos to train our public models without explicit consent.</p>

      <h2>4. Data retention</h2>
      <p>Uploaded images are retained only as long as necessary to provide the service and are periodically deleted from our servers.</p>

      <h2>5. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at privacy@fitmixai.com.</p>
    </div>
  );
}
