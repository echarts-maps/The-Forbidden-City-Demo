from pyecharts import options as opts
from pyecharts.charts import Geo
from pyecharts.datasets import register_url

register_url("https://echarts-maps.github.io/The-Forbidden-City-Demo")

g = (
    Geo()
    .add_schema(maptype="紫禁城")
    .set_global_opts(
        title_opts=opts.TitleOpts(title="北京紫禁城"),
    )
)
g.render("render-zh.html")
