export default {
  name: 'featuredlink_rewriter',
  initialize(container) {
    const siteSettings = container.lookup("site-settings:main");
    console.log(siteSettings.featuredlink_rewriter);
		const f_links = $(".topic-featured-link");
		var f_links_i;
		for (f_links_i = 0; f_links_i < f_links.length; f_links_i++) {
		  f_links[f_links_i].childNodes[1].textContent = siteSettings.featuredlink_rewriter;
		}  
   }
};