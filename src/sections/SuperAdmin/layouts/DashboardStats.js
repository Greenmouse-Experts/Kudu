import StatCard from "@/components/StatsCard";

const DashboardStats = () => {
    return (
        <div className="flex w-full lg:flex-row md:flex-row flex-col gap-4">
            <StatCard
                cronTop
                cronAnalytics={<span className="flex w-auto flex-col justify-center py-1 px-3 text-xs rounded-md shadow-xs" style={{ backgroundColor: 'rgba(5, 193, 104, 0.2)' }}>
                    28.4%
                </span>}
                number={3023}
                label="Total Users"
                iconColor="bg-mobiOrange"
                IconComponent={<img src="/assets/users.svg" alt="Users" style={{ width: '22px' }} />}
            />
            <StatCard
                cronTop
                cronAnalytics={<span className="flex w-auto flex-col justify-center py-1 px-3 text-xs rounded-md shadow-xs" style={{ backgroundColor: 'rgba(5, 193, 104, 0.2)' }}>
                    28.4%
                </span>}
                number={407}
                label="Total Products"
                iconColor="bg-mobiSubPurple"
                IconComponent={<img src="/assets/products.svg" alt="Subscriptions" style={{ width: '20px' }} />}
            />
            <StatCard
                cronTop
                cronAnalytics={<span className="flex w-auto flex-col justify-center py-1 px-3 text-xs rounded-md shadow-xs" style={{ backgroundColor: 'rgba(5, 193, 104, 0.2)' }}>
                    28.4%
                </span>}
                number={139}
                label="Total Orders"
                iconColor="bg-mobiSkyCloud"
                IconComponent={<img src="/assets/orders.svg" alt="Organisations" style={{ width: '20px' }} />}
            />
            <StatCard
                cronTop
                cronTopIcon={<img src="/assets/star.svg" />}
                cronAnalytics={<span className="flex w-auto flex-col justify-center py-1 px-3 text-xs rounded-md shadow-xs" style={{ backgroundColor: 'rgba(5, 193, 104, 0.2)' }}>
                    28.4%
                </span>}
                number={329}
                label="Total Services"
                iconColor="bg-mobiLightGreen"
                IconComponent={<img src="/assets/services.svg" alt="Events" style={{ width: '20px' }} />}
            />
        </div>
    );
};

export default DashboardStats;