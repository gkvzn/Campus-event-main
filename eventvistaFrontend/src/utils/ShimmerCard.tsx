const ShimmerCard: React.FC = () => {
    return (
        <div className="shimmer-loader-main">
            <div className="loader-shimmer-banner shimmer-animation"></div>
            <div className="loader-shimmer-content">
                <div className="loader-shimmer-header">
                    <div className="loader-shimmer-title shimmer-animation"></div>
                </div>
                <div className="loader-shimmer-list shimmer-animation"></div>
            </div>
        </div>
    )
}

export default ShimmerCard