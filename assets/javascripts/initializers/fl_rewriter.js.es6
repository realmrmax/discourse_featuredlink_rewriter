export default {
  name: 'featuredlink_rewriter',
  initialize(container) {
    const siteSettings = container.lookup("site-settings:main");
    console.log(siteSettings.featuredlink_rewriter);
		f_links = $(".topic-featured-link");
   }
};