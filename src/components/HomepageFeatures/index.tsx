import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import Translate from '@docusaurus/Translate'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: string
  titleTransId: string
  textTransId: string
}

const FeatureList: FeatureItem[] = [
  {
    title: '界面控制',
    titleTransId: 'home.function.control.title',
    Svg: require('@site/static/img/ic_panel.svg').default,
    description: '提供UI界面，对机械臂末端进行控制',
    textTransId: 'home.function.control.text'
  },
  {
    title: '积木编程',
    Svg: require('@site/static/img/icon-li-ZBlocky.svg').default,
    description: '提供底层接口，支持可视化的积木编程',
    titleTransId: 'home.function.blocky.title',
    textTransId: 'home.function.blocky.text'
  },
  {
    title: '脚本编程',
    Svg: require('@site/static/img/Web Programming.svg').default,
    description: '对接lua，进行机械臂末端进行编程控制',
    titleTransId: 'home.function.script.title',
    textTransId: 'home.function.script.text'
  }
]

function Feature({ title, Svg, description, textTransId, titleTransId }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate id={titleTransId}>{title}</Translate>
        </Heading>
        <p>
          <Translate id={textTransId}>{description}</Translate>
        </p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
