from pyecharts import options as opts
from pyecharts.charts import Geo
from pyecharts.datasets import register_url

register_url("https://echarts-maps.github.io/The-Forbidden-City-Demo")

g = (
    Geo()
    .add_schema(maptype="The Forbidden City")
    .set_global_opts(
        title_opts=opts.TitleOpts(title="The Forbidden City in Beijing"),
    )
)
g.render()
