var frame = require("ui/frame");
var reddit_app_view_model_1 = require("./reddit-app-view-model");
var appViewModel = new reddit_app_view_model_1.AppViewModel();
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = appViewModel;
    if (frame.topmost().android) {
        frame.topmost().android.cachePagesOnNavigate = true;
    }
}
exports.pageLoaded = pageLoaded;
function listViewItemTap(args) {
    frame.topmost().navigate({
        moduleName: "./details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
exports.listViewItemTap = listViewItemTap;
function listViewLoadMoreItems(args) {
    appViewModel.redditItems.length += appViewModel.redditItems.loadSize;
}
exports.listViewLoadMoreItems = listViewLoadMoreItems;
