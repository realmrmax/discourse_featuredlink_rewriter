export default {
  name: 'featuredlink_rewriter',
  initialize(container) {
    const siteSettings = container.lookup("site-settings:main");
    console.log(siteSettings.featuredlink_rewriter);
		const f_links = $(".topic-featured-link");
   }
};