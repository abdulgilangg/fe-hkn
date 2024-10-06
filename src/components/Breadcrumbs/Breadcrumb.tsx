import { Link } from 'react-router-dom';
import { BreadcrumbProps } from '../../types/package';

const Breadcrumb = ({ pageName, role }: BreadcrumbProps) => {
  const basePath = {
    admin: { path: '/admin/home', label: 'Home' },
    dealer: { path: '/dealer/home', label: 'Home' },
  };

  const { path, label } = basePath[role];

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          {pageName}
        </h2>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <Link className="font-medium" to={path}>
                {label} /
              </Link>
            </li>
            <li className="font-medium text-primary">{pageName}</li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
