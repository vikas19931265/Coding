<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final criteria : gw.api.heatmap.CatastropheSearchCriteria) %>
<script>var searchInputs = "${criteria.SettingsString}"</script><iframe id="mapFrame" src="${gw.api.web.WebUtil.BasePath}/MapOverlay.do?map.html=&mapName=${criteria.HeatMap.MapName}" width="${criteria.HeatMap.InitialWidth}" height="${criteria.HeatMap.InitialHeight}" frameborder="0"> <p>${gw.api.locale.DisplayKey.get('Web.HeatMap.BrowserDoesntSupportIframes')}</p> </iframe>