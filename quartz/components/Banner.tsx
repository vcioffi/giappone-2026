import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Banner: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const banner = fileData.frontmatter?.banner as string | undefined
  const bannerY = fileData.frontmatter?.banner_y as number | undefined

  if (!banner) return null

  const pos = bannerY !== undefined ? `center ${bannerY * 100}%` : "center 50%"

  return (
    <div class="banner-container">
      <img src={banner} alt="" class="banner-image" style={`object-position: ${pos}`} />
    </div>
  )
}

export default (() => Banner) satisfies QuartzComponentConstructor
